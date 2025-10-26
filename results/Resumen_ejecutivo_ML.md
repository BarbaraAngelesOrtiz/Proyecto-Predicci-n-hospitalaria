# 📊 Resumen Ejecutivo – Modelado y Forecasting de Ocupación Hospitalaria
## 🎯 Objetivo General

Desarrollar y evaluar modelos predictivos (clasificación y regresión) para estimar la ocupación hospitalaria total, de planta y UCI, así como proyectar tendencias futuras (forecasting) para el año 2025.

## 🧠 1. Selección del Modelo

🔹 Modelos Evaluados:

- Linear Regression
- MLPRegressor (Red Neuronal Multicapa)
- Random Forest
- XGBoost
- Logistic Regression (para clasificación)

----------

## 🧩 2. Conclusiones Técnicas

🟦 Clasificación: Alta Ocupación

* Random Forest y Logistic Regression fueron los más robustos (AUC=0.92).
* El modelo logra distinguir con precisión entre alta y baja ocupación.
* Fallos residuales: 190 falsos negativos y 189 falsos positivos (en ~2800 observaciones).
* Las curvas ROC y Precision-Recall confirman excelente discriminación de clases.

🟨 Regresión: Ocupación Específica

* Linear Regression ofrece un excelente desempeño en ocupación total y planta (R²=0.96, MAE≈26 camas).
* Random Forest sobresale en la predicción de ocupación UCI (MAE=2.51 camas).
* No se detectan sesgos sistemáticos, los errores son aleatorios y estables en el tiempo.

🟩 Análisis de Errores

* Distribución de residuos centrada en cero (forma normal → sin sesgo).
* Outliers esporádicos entre junio 2023 y julio 2023 sugieren revisar eventos excepcionales.

--------------

## 🌳 3. Modelo Seleccionado: Random Forest
✅ Razones:

* Alto desempeño en todas las tareas (clasificación y regresión).
* Capacidad para manejar no linealidades y interacciones complejas.
* Errores bajos en variables críticas como la ocupación UCI.
* Robustez comprobada con distintos subconjuntos de datos.

Conclusión: Random Forest es el modelo más equilibrado y fiable para aplicaciones operativas y de planificación hospitalaria.

-------

## 📈 4. Forecasting 2025 (Predicción Futura)
🔹 Tendencia General

* El modelo predice estabilidad en la ocupación total (rango 420–480 camas).
* Distribución de predicciones con forma gaussiana, sin picos de crisis.

🔹 Variabilidad Regional

* Provincias como Soria y Salamanca muestran alta volatilidad.
* Ávila y Segovia presentan comportamiento estable o decreciente.
* A nivel hospitalario, algunos centros muestran picos estacionales significativos.

🔹 Implicaciones para la Planificación

* Bajo riesgo de saturación global en 2025.
* Se recomienda monitorear los hospitales outliers con fluctuaciones extremas.
* Las predicciones futuras deben combinarse con variables externas (clima, eventos epidémicos, cambios demográficos) para mayor precisión.

------

# 💡 Síntesis Ejecutiva

El modelo Random Forest proporciona un equilibrio óptimo entre precisión, interpretabilidad y robustez.
Su aplicación práctica puede optimizar la planificación hospitalaria, anticipar picos de demanda y reducir riesgos operativos, especialmente en unidades críticas como la UCI.
