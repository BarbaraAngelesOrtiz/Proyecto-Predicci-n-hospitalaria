# Resumen Analítico — Predicción de Demanda Hospitalaria

**Fecha generación:** 2025-10-28 19:37 UTC

[Dashboard Looker](https://lookerstudio.google.com/reporting/42a8f2b3-c97a-4e49-9792-048cd5b342eb/page/7XDdF?s=p1pMHtUUhws)

## 1. Objetivo

Resumen automático generado a partir de los CSV exportados del dashboard y del dataset histórico.


## 2. Provincias con mayor ocupación media (muestra)

- Datos insuficientes para generar ranking.


## 3. Correlaciones relevantes


- Correlación provincia_Zamora ↔ hospital_Complejo Asistencial de Zamora: 1.00

- Correlación provincia_Segovia ↔ hospital_Complejo Asistencial de Segovia: 1.00

- Correlación provincia_Soria ↔ hospital_Complejo Asistencial de Soria: 1.00

- Correlación provincia_Salamanca ↔ hospital_Complejo Asistencial Universitario de Salamanca: 1.00

- Correlación provincia_Palencia ↔ hospital_Complejo Asistencial Universitario de Palencia: 1.00

- Correlación hospital_Complejo Asistencial Universitario de Palencia ↔ provincia_Palencia: 1.00

- Correlación hospital_Complejo Asistencial de Soria ↔ provincia_Soria: 1.00

- Correlación hospital_Complejo Asistencial de Segovia ↔ provincia_Segovia: 1.00


## 4. Alertas detectadas (PICO / VALLE)


Total alertas detectadas: **1601**


Ejemplo (primeras filas):


- **Provincia:** | Variable: **camas_habilitadas_planta** | Valor: **6694.0** | Tipo: **Pico** | Fecha: 

- **Provincia:** | Variable: **camas_ocupadas_planta** | Valor: **719.0** | Tipo: **Pico** | Fecha: 

- **Provincia:** | Variable: **camas_ocupadas_uci** | Valor: **43.0** | Tipo: **Pico** | Fecha: 

- **Provincia:** | Variable: **camas_ocupadas_uci** | Valor: **45.0** | Tipo: **Pico** | Fecha: 

- **Provincia:** | Variable: **camas_ocupadas_uci** | Valor: **44.0** | Tipo: **Pico** | Fecha: 

- **Provincia:** | Variable: **camas_ocupadas_uci** | Valor: **44.0** | Tipo: **Pico** | Fecha: 

- **Provincia:** | Variable: **camas_ocupadas_uci** | Valor: **43.0** | Tipo: **Pico** | Fecha: 

- **Provincia:** | Variable: **camas_ocupadas_uci** | Valor: **44.0** | Tipo: **Pico** | Fecha: 

- **Provincia:** | Variable: **camas_ocupadas_uci** | Valor: **45.0** | Tipo: **Pico** | Fecha: 

- **Provincia:** | Variable: **camas_ocupadas_uci** | Valor: **47.0** | Tipo: **Pico** | Fecha: 


## 5. Recomendaciones prácticas


- Calibrar umbrales por provincia usando percentiles (P95/P5) para reducir falsos positivos.

- Priorizar activación de turnos para provincias con alertas PICO consecutivas.

- Incorporar variables exógenas (clima, eventos) en la ingeniería de features.


## 6. Archivos generados


- `correlation_matrix.png`

- `README.md`

- `Readme Agentes.md`

- `Análisis_y_Visualización_de_Demanda_Hospitalaria (1).pdf`

- `correlation_matrix_full.csv`

- `REPORTE_DE_ANALISIS_EXPLORATORIO_22.md`

- `Resumen_ejecutivo_ML.md`

- `media`

- `README  Bot – ChromeAI.md`

- `imagen_Bot_AI`

- `alertas_pico_valle_detectadas.csv`

- `imagen Agentes`

- `trend_by_month.csv`
