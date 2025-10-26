# 🏥  Modelo Predictivo de Deterioro de Salud en Pacientes Hospitalizados
## **NoCountry Simulación Laboral** 

🧩 Roles: Data Engineer | Data Analyst | Machine Learning Engineer

Desarrollo integral de un sistema de análisis, modelado predictivo y forecasting de ocupación hospitalaria utilizando datos reales simulados de distintas provincias y hospitales de España.

------
## 🚀 Objetivo del Proyecto

El objetivo general es construir una plataforma analítica y predictiva para anticipar la ocupación total de camas hospitalarias (planta y UCI), combinando pipelines de ingeniería de datos, análisis exploratorio, modelos de clasificación/regresión y proyecciones futuras.

Este proyecto representa una simulación profesional que integra las tres etapas de un flujo de datos moderno:

- Data Engineering: extracción, transformación, carga (ETL) y análisis exploratorio (EDA) de datos hospitalarios históricos.
- Data Analysis: exploración, visualización y análisis de correlaciones y métricas clave.
- Machine Learning: entrenamiento y validación de modelos predictivos de ocupación hospitalaria, con proyecciones de forecasting.
-----

## 🛠️ Stack Tecnológico

| Área                                 | Herramientas                                                            |
| ------------------------------------ | ----------------------------------------------------------------------- |
| **Data Engineering**                 | Python, Pandas, SQL, ETL pipelines                                      |
| **Data Analysis**                    | Pandas, Seaborn, Matplotlib, Plotly, Looker                             |
| **Machine Learning**                 | Scikit-learn, XGBoost, Random Forest, MLPRegressor, Logistic Regression |
| **Forecasting**                      | Random Forest Regressor, análisis temporal                              |
| **Infraestructura**                  | Google Colab / Jupyter Notebooks                                        |

-----
## 📊 Flujo General del Proyecto

### 1️⃣ Data Engineering

- Limpieza, normalización y enriquecimiento de los datasets de ocupación.
- Implementación de pipelines ETL en Python (extracción desde fuentes CSV y APIs).
- Integración de datos meteorológicos y demográficos (factores externos).
- Análisis exploratorio (EDA) de los features y targets. 

### 2️⃣ Data Analysis

- Análisis exploratorio (EDA) con visualizaciones dinámicas (seaborn, plotly).
- Cálculo de correlaciones entre variables (ocupación, clima, ubicación geográfica).
- Creación de dashboards en Looker y notebooks interactivos para interpretación de resultados.
- Heatmaps y gráficos comparativos por hospital y provincia.

### 3️⃣ Machine Learning

- Entrenamiento de modelos de regresión y clasificación:Random Forest, Linear Regression, XGBoost, MLPRegressor, Logistic Regression
- Evaluación de rendimiento mediante métricas: R², MAE, AUC-ROC, Precision-Recall
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

## 🛠️ Instrucciones para Ejecutar el Notebook

1. Clonar o descargar el repositorio:

```bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
```

2. Crear un entorno virtual (opcional, recomendado):
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

3. Instalar las dependencias necesarias:
```bash
pip install -r requirements.txt
```

4. Abrir el notebook:

- Google Colab: Subí el notebook y los datos, y ejecutá las celdas.
- Jupyter Notebook / VSCode: Abrí notebooks/Proyecto.ipynb y ejecutá secuencialmente las celdas.

5. Ejecutar celdas:

- Orden recomendado: limpieza de datos → definición de features/targets → entrenamiento de modelos → evaluación → forecasting → exportación de resultados.
- Los archivos CSV de datos estén en la carpeta data/.

6. Exportar resultados:

- Los CSV con predicciones se generan en data/ por defecto.
- Los gráficos y figuras se guardan en results/media/ y Machime_Learning/figuras.

-----

## 📂 Project Access

- [Notebook Machine Learning](https://github.com/munozgnathaly-crypto/Proyecto-Predicci-n-hospitalaria/blob/main/Machine_Learning/ML_Code.ipynb)
- [Notebook Analysis](https://github.com/munozgnathaly-crypto/Proyecto-Predicci-n-hospitalaria/blob/main/Analyst/Fractura_Cadera.ipynb)
---

## Autoras

Proyecto desarrollado como parte de una simulación laboral en [NoCountry](https://nocountry.tech/), donde se trabajó en equipo bajo una metodología ágil, integrando roles técnicos de Data Engineer, Data Analyst y Machine Learning Engineer.


| **Nathaly Muñoz** | **Bárbara Ángeles Ortiz** | **Valeria Donnet** |
|:---:|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/8110c040-c424-4c9b-9a07-4d725d4023b9" width="120"><br>Data Analyst<br>[LinkedIn](https://www.linkedin.com/in/munozgnathaly/)<br>[GitHub](https://github.com/munozgnathaly-crypto) | <img src="https://github.com/user-attachments/assets/5b09823d-e7eb-4752-97c0-35fc774584d3" width="120"><br>Machine Learning Engineer<br>[LinkedIn](https://www.linkedin.com/in/barbaraangelesortiz/)<br>[GitHub](https://github.com/BarbaraAngelesOrtiz) | <img src="https://github.com/user-attachments/assets/5cacc273-213b-4b0b-bde2-f60b2f990137" width="120"><br>Data Engineer<br>[LinkedIn](https://www.linkedin.com/in/valeria-donnet/)<br>[GitHub](https://github.com/valedonnet) |


![Status](https://img.shields.io/badge/status-finished-brightgreen) 📅 Octubre 2025

![Python](https://img.shields.io/badge/python-3.10-blue)

![NumPy](https://img.shields.io/badge/numpy-1.26.0-blue)

![Pandas](https://img.shields.io/badge/pandas-2.1.0-blue)

![scikit-learn](https://img.shields.io/badge/scikit--learn-1.3.0-orange)

![XGBoost](https://img.shields.io/badge/xgboost-1.7.6-red)

![Matplotlib](https://img.shields.io/badge/matplotlib-3.8.0-blue)

![Seaborn](https://img.shields.io/badge/seaborn-0.12.2-pink)

![Plotly](https://img.shields.io/badge/plotly-5.16.1-lightblue)

## Agradecimientos 

![nocountrytalent_cover2](https://github.com/user-attachments/assets/b6e30061-b91e-45c6-b44a-06b3be490790)



