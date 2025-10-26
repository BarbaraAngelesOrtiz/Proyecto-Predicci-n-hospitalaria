# 🏥 Hospital Bed Occupancy Forecasting – NoCountry Simulation Project
# Modelo Predictivo de Deterioro de Salud en Pacientes Hospitalizados

🧩 Roles: Data Engineer | Data Analyst | Machine Learning Engineer
**Simulación Laboral – NoCountry**

Desarrollo integral de un sistema de análisis, modelado predictivo y forecasting de ocupación hospitalaria utilizando datos reales simulados de distintas provincias y hospitales.

------
## 🚀 Objetivo del Proyecto

El objetivo general es construir una plataforma analítica y predictiva para anticipar la ocupación total de camas hospitalarias (planta y UCI), combinando pipelines de ingeniería de datos, análisis exploratorio, modelos de clasificación/regresión y proyecciones futuras.

Este proyecto representa una simulación profesional que integra las tres etapas de un flujo de datos moderno:

- Data Engineering: extracción, transformación y carga (ETL) de datos hospitalarios históricos.
- Data Analysis: exploración, visualización y análisis de correlaciones y métricas clave.
- Machine Learning: entrenamiento y validación de modelos predictivos de ocupación hospitalaria, con proyecciones de forecasting.
-----

## 🛠️ Stack Tecnológico

| Área                                 | Herramientas                                                            |
| ------------------------------------ | ----------------------------------------------------------------------- |
| **Data Engineering**                 | Python, Pandas, SQL, Google Cloud Storage, ETL pipelines                |
| **Data Analysis**                    | Pandas, Seaborn, Matplotlib, Plotly, PowerBI                            |
| **Machine Learning**                 | Scikit-learn, XGBoost, Random Forest, MLPRegressor, Logistic Regression |
| **Forecasting**                      | Random Forest Regressor, análisis temporal                              |
| **Infraestructura y Automatización** | GitHub Actions, Google Colab / Jupyter Notebooks                        |

-----
## 📊 Flujo General del Proyecto

### 1️⃣ Data Engineering

- Limpieza, normalización y enriquecimiento de los datasets de ocupación.
- Implementación de pipelines ETL en Python (extracción desde fuentes CSV y APIs).
- Integración de datos meteorológicos y demográficos (factores externos).

### 2️⃣ Data Analysis

Análisis exploratorio (EDA) con visualizaciones dinámicas (seaborn, plotly).
Cálculo de correlaciones entre variables (ocupación, clima, ubicación geográfica).
Creación de dashboards en PowerBI y notebooks interactivos para interpretación de resultados.
Heatmaps y gráficos comparativos por hospital y provincia.

### 3️⃣ Machine Learning

- Entrenamiento de modelos de regresión y clasificación:
- Random Forest, Linear Regression, XGBoost, MLPRegressor, Logistic Regression
- Evaluación de rendimiento mediante métricas:
- R², MAE, AUC-ROC, Precision-Recall
- Selección final del modelo Random Forest por su robustez y rendimiento balanceado.
- Generación de predicciones y forecasting de ocupación hasta diciembre 2025.
  
------
## 🤖 Resultados Principales

- Modelos Top: Random Forest y Logistic Regression (AUC-ROC = 0.92)
- Matriz de confusión con 86% de acierto global.
- Linear Regression ofrece la mejor precisión para ocupación general.
- Random Forest se consolida como el modelo más robusto y versátil, especialmente para la predicción crítica de UCI.

----
## 🔮 Forecasting (Predicción Futura)

- Forecast del modelo Random Forest de junio a diciembre 2025.
- Predicción estable (rango 420–480 camas) con fluctuaciones estacionales.
- Análisis desagregado por provincia y hospital muestra diferencias regionales clave.
- Identificación de picos temporales y outliers críticos para gestión de recursos.

-----
## 🗂️ Estructura del Repositorio

```bash

📁 Proyecto-Predicci-n-hospitalaria/
├── data/
│   ├── raw/            # Datos originales
│   ├── clean/          # Datos limpios y listos para análisis
│
├── Analysis/
│   ├── Fractura_Cadera.ipynb
│
├── results/
│   ├── media/                                  # Visualizaciones y gráficos
│   ├── REPORTE DE ANÁLISIS EXPLORATORIO.md     # Reporte de Data Engineer de Ocupación Hospitalaria
│   ├── Resumen_ejecutivo_ML.md                 # Reporte de Modelado y Forecasting de Ocupación Hospitalaria
│   ├── xxxx                                    # Dashboards PowerBI o Plotly 
│
│
├── Machine_Learning/
│   ├── ML_Code.ipynb  # Modelo final guardado
│   ├──predicciones_random_forest.csv
│   ├──forecast_random_forest_resto_2025_.csv
│   ├──figuras
│       ├──forecasting
│       ├──modelo_elegido
│       ├──modelos
│
├── README.md               # Descripción general del proyecto
└── requirements.txt
```

---
## 👩‍💻 Equipo NoCountry – Simulación Laboral

Proyecto desarrollado como parte de una simulación laboral en [NoCountry](https://nocountry.tech/), donde se trabajó en equipo bajo una metodología ágil, integrando roles técnicos de Data Engineer, Data Analyst y Machine Learning Engineer.
