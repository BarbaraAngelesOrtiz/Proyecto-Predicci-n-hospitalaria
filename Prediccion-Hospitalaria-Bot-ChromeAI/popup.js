let hospitalData = [];
let predData = [];

document.addEventListener("DOMContentLoaded", () => {
  const analyzeBtn = document.getElementById("analyzeBtn");
  const fileHospital = document.getElementById("fileHospital");
  const filePred = document.getElementById("filePredicciones");
  const outputDiv = document.getElementById("output");
  const botInput = document.getElementById("botInput");
  const botBtn = document.getElementById("botBtn");
  const botOutput = document.getElementById("botOutput");

  if (!analyzeBtn || !fileHospital || !outputDiv) return;

  // --- Parse CSV ---
  const parseCSV = (file) => new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: false,
      complete: (results) =>
        resolve(results.data.filter(r => Object.keys(r).length > 0)),
      error: (err) => reject(err)
    });
  });

  // --- Normalizar números ---
  const normalizeNumericCols = (data) => {
    if (!data || !data.length) return data;
    const cols = Object.keys(data[0]);
    return data.map(row => {
      const out = {};
      cols.forEach(c => {
        const v = row[c];
        if (v === null || v === undefined || v === "") {
          out[c] = null;
        } else if (typeof v === "string") {
          const s = v.replace(",", ".").trim();
          const n = Number(s);
          out[c] = isNaN(n) ? v : n;
        } else {
          out[c] = v;
        }
      });
      return out;
    });
  };

  // --- Funciones auxiliares ---
  const avg = arr => {
    const nums = arr
      .map(v => (typeof v === "string" ? Number(v.replace(",", ".")) : v))
      .filter(v => typeof v === "number" && !isNaN(v));
    if (!nums.length) return 0;
    return nums.reduce((a, b) => a + b, 0) / nums.length;
  };

  const promedioCamasPorHospitalOrProvince = (data, indicatorCol, camaColName) => {
    if (!data.length) return 0;
    const camaCol = camaColName || Object.keys(data[0]).find(c => c.includes("camas_ocupadas")) || null;
    const sampleVals = data.map(r => r[indicatorCol])
      .filter(v => v !== null && v !== undefined && v !== "");
    const numericSample = sampleVals
      .map(v => (typeof v === "number" ? v : Number(String(v).replace(",", "."))))
      .filter(v => !isNaN(v));
    const maxSample = numericSample.length ? Math.max(...numericSample) : 0;

    if (maxSample > 1) return +(avg(numericSample)).toFixed(1);

    if (!camaCol) return 0;
    const subset = data.filter(r => {
      const iv = r[indicatorCol];
      return iv === 1 || iv === "1" || iv === true || iv === "true";
    }).map(r => {
      const cv = r[camaCol];
      if (cv === null || cv === undefined || cv === "") return NaN;
      return (typeof cv === "number") ? cv : Number(String(cv).replace(",", "."));
    }).filter(v => !isNaN(v));

    if (!subset.length) return 0;
    return +(subset.reduce((a, b) => a + b, 0) / subset.length).toFixed(1);
  };

  const promediosParaCols = (data, cols, camaColName) => {
    return cols.map(c => ({
      nombre: c.replace(/^hospital_|^provincia_/, ""),
      valor: promedioCamasPorHospitalOrProvince(data, c, camaColName)
    }));
  };

  // --- Cargar CSVs ---
  analyzeBtn.addEventListener("click", async () => {
    outputDiv.innerHTML = "";
    if (!fileHospital.files.length) {
      outputDiv.innerHTML = "<p style='color:red'>Por favor, seleccioná el CSV de datos históricos.</p>";
      return;
    }

    try {
      const rawHospital = await parseCSV(fileHospital.files[0]);
      hospitalData = normalizeNumericCols(rawHospital);
    } catch (e) {
      outputDiv.innerHTML = `<p style='color:red'>Error al leer CSV histórico: ${e.message}</p>`;
      return;
    }

    let resumen = `<p><b>Total de registros históricos:</b> ${hospitalData.length}</p>`;
    resumen += `<p><b>Columnas detectadas:</b> ${Object.keys(hospitalData[0]).join(", ")}</p>`;

    if (filePred.files.length) {
      try {
        const rawPred = await parseCSV(filePred.files[0]);
        predData = normalizeNumericCols(rawPred);
        resumen += `<p><b>Predicciones cargadas:</b> ${predData.length} registros</p>`;
      } catch (e) {
        resumen += `<p style='color:orange'>No se pudo leer predicciones: ${e.message}</p>`;
      }
    } else {
      resumen += `<p><i>No se cargó archivo de predicciones.</i></p>`;
    }

    outputDiv.innerHTML = resumen;
  });

  // --- BOT INTERACTIVO ---
  botBtn.addEventListener("click", () => {
    const q = (botInput.value || "").toLowerCase().trim();
    if (!hospitalData.length) {
      botOutput.innerText = "Primero cargá el CSV histórico (hospital_data.csv).";
      return;
    }

    const columnas = Object.keys(hospitalData[0]);
    const camaCol = columnas.find(c => c.includes("camas_ocupadas")) || null;

    // --- Promedio general ---
    if (q.includes("promedio general") || q.includes("promedio de camas") || q.includes("ocupación general")) {
      if (!camaCol) { botOutput.innerText = "No se encontró columna de camas."; return; }
      const valores = hospitalData.map(r => r[camaCol]).filter(v => typeof v === "number");
      botOutput.innerText = `Promedio general de camas ocupadas: ${avg(valores).toFixed(1)}`;
      return;
    }

    // --- Hospital más ocupado ---
    if (q.includes("hospital más ocupado") || q.includes("hospital con más camas")) {
      const hospCols = columnas.filter(c => c.startsWith("hospital_"));
      if (!hospCols.length) { botOutput.innerText = "No se detectaron columnas hospital_ en el dataset."; return; }
      const promedios = promediosParaCols(hospitalData, hospCols, camaCol);
      promedios.sort((a, b) => b.valor - a.valor);
      const top = promedios[0];
      botOutput.innerText = `🏥 Hospital más ocupado: ${top.nombre} (${top.valor} camas promedio)`;
      return;
    }

    // --- Promedio por hospital ---
    if (q.includes("promedio por hospital") || q.includes("ocupación por hospital")) {
      const hospCols = columnas.filter(c => c.startsWith("hospital_"));
      if (!hospCols.length) { botOutput.innerText = "No se detectaron columnas hospital_ en el dataset."; return; }
      const promedios = promediosParaCols(hospitalData, hospCols, camaCol);
      botOutput.innerText = promedios.map(p => `${p.nombre}: ${p.valor}`).join(", ");
      return;
    }

    // --- Promedio por provincia ---
    if (q.includes("provincia") || q.includes("por provincia")) {
      const provCols = columnas.filter(c => c.startsWith("provincia_"));
      if (!provCols.length) { botOutput.innerText = "No se detectaron columnas provincia_ en el dataset."; return; }
      const promedios = promediosParaCols(hospitalData, provCols, camaCol);
      botOutput.innerText = promedios.map(p => `${p.nombre}: ${p.valor}`).join(", ");
      return;
    }

    // --- Día con mayor ocupación ---
    if (q.includes("día con más ocupación") || q.includes("fecha máxima") || q.includes("día más ocupado")) {
      if (!camaCol) { botOutput.innerText = "No se encontró columna de camas."; return; }
      const best = hospitalData.reduce((a, b) => ((a[camaCol] || 0) > (b[camaCol] || 0) ? a : b));
      botOutput.innerText = `📅 Día con mayor ocupación: ${best.fecha} (${best[camaCol]} camas)`;
      return;
    }

    // --- Predicción para mañana ---
    if (q.includes("predicción para mañana") || q.includes("mañana")) {
      if (!predData.length) {
        botOutput.innerText = "No cargaste el CSV de predicciones.";
        return;
      }

      const fechas = predData
        .map(r => r.fecha)
        .filter(f => !!f)
        .sort((a, b) => new Date(a) - new Date(b));

      if (!fechas.length) {
        botOutput.innerText = "No se encontraron fechas en las predicciones.";
        return;
      }

      const hoy = new Date();
      const manana = new Date(hoy);
      manana.setDate(hoy.getDate() + 1);
      const mananaISO = manana.toISOString().split("T")[0];

      let predRow = predData.find(r => r.fecha === mananaISO);
      if (!predRow) {
        const posterior = fechas.find(f => new Date(f) > hoy);
        if (posterior) predRow = predData.find(r => r.fecha === posterior);
      }

      if (predRow && predRow.pred_camas_total) {
        botOutput.innerText = `📆 Predicción de camas para mañana (${predRow.fecha}): ${predRow.pred_camas_total}`;
      } else {
        botOutput.innerText = "No hay predicción disponible para mañana en el CSV.";
      }
      return;
    }

    // --- Tendencia de predicciones ---
    if (q.includes("tendencia") || q.includes("predicciones suben") || q.includes("predicciones bajan")) {
      if (!predData.length) {
        botOutput.innerText = "No cargaste el CSV de predicciones.";
        return;
      }

      const vals = predData
        .map(r => Number(String(r.pred_camas_total).replace(",", ".")))
        .filter(v => !isNaN(v));

      if (vals.length < 3) {
        botOutput.innerText = "No hay suficientes datos para analizar la tendencia.";
        return;
      }

      const tercio = Math.floor(vals.length / 3);
      const promInicio = avg(vals.slice(0, tercio));
      const promFin = avg(vals.slice(-tercio));

      const diff = promFin - promInicio;
      const perc = (diff / promInicio) * 100;

      if (diff > 0) {
        botOutput.innerText = `📈 Las predicciones muestran una tendencia al alza (+${perc.toFixed(1)}%).`;
      } else if (diff < 0) {
        botOutput.innerText = `📉 Las predicciones muestran una tendencia a la baja (${perc.toFixed(1)}%).`;
      } else {
        botOutput.innerText = "📊 Las predicciones se mantienen estables sin cambios significativos.";
      }
      return;
    }

    // --- Predicción más alta (corregido: analiza todo el CSV) ---
    if (q.includes("predicción más alta") || q.includes("máxima predicción")) {
      if (!predData.length) {
        botOutput.innerText = "No cargaste el CSV de predicciones.";
        return;
      }

      const valid = predData
        .filter(r => r.pred_camas_total !== undefined && r.pred_camas_total !== "")
        .map(r => ({
          ...r,
          pred_camas_total: Number(String(r.pred_camas_total).replace(",", "."))
        }))
        .filter(r => !isNaN(r.pred_camas_total));

      if (!valid.length) {
        botOutput.innerText = "No hay valores válidos de predicciones.";
        return;
      }

      // 🔹 Busca el valor máximo en todo el CSV
      const maxRow = valid.reduce((a, b) =>
        a.pred_camas_total > b.pred_camas_total ? a : b
      );

      botOutput.innerText =
        `🏥 La predicción más alta registrada fue el ${maxRow.fecha} con ${maxRow.pred_camas_total} camas.`;
      return;
    }

    // --- Fallback ---
    botOutput.innerText = "No entiendo la pregunta 😅 Podés probar con:\n" +
      "• 'Promedio general de camas'\n" +
      "• 'Hospital más ocupado'\n" +
      "• 'Promedio por provincia'\n" +
      "• 'Promedio por hospital'\n" +
      "• 'Día con más ocupación'\n" +
      "• 'Predicción para mañana'\n" +
      "• 'Tendencia de predicciones'\n" +
      "• 'Predicción más alta'";
  });
});
