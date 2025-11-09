# 🏥 Predictive Model for Health Deterioration in Hospitalized Patients
## **NoCountry Job Simulation**

🧩 Roles: Data Engineer | Data Analyst | Machine Learning Engineer | Automation Engineer

Comprehensive development of a system for analysis, predictive modeling, forecasting, and automation of hospital occupancy using simulated real data from different provinces and hospitals in Spain.

[Video demo](https://www.youtube.com/watch?v=govwa3ibkH0)

------
## 🚀 Project Objective

The overall objective is to build an analytical and predictive platform to anticipate total hospital bed occupancy (wards and ICU), combining data engineering pipelines, exploratory analysis, machine learning models, future projections, and real-time alerts.

This project represents a professional simulation that integrates the various stages of a modern data flow:

- Data Engineering: extraction, transformation, loading (ETL), and exploratory data analysis (EDA) of historical hospital data.
- Data Analysis: Exploration, visualization, and analysis of correlations and key metrics.

- Machine Learning: Training and validation of predictive models for hospital occupancy, with forecasting projections.

- Automation Engineer: Downloading and updating hospital data from Google Drive to Google Sheets. Publishing results and sending alerts via Telegram. Interactive visualization of predictions and local CSV files from a browser.

-----

## 🛠️ Technology Stack

| Area | Main Tools / Technologies |

-------------------------------------------- | ------------------------------------------------------------------------------- |

**Data Engineering** | Python, Pandas, SQL, ETL pipelines |

**Data Analysis** | Pandas, Seaborn, Matplotlib, Plotly, Looker |

**Machine Learning** | Scikit-learn, XGBoost, Random Forest, MLP Regressor, Logistic Regression |

**Forecasting** | Random Forest Regressor, time frame analysis |

**Infrastructure** | Google Colab / Jupyter Notebooks |

**Automation & Monitoring** | GitHub Actions, Google Drive API, Google Sheets API (GSpread), Telegram Bot API |

**Interactive Applications (ChromeAI Bot)** | JavaScript, HTML, CSS, PapaParse, Chrome Extensions API |

-----
## 📊 General Project Flow

### 1️⃣ Data Engineering

- Cleaning, normalization, and enrichment of occupancy datasets.

- Implementation of ETL pipelines in Python (extraction from CSV sources and APIs).

- Integration of meteorological and geographic data (external factors).

- Exploratory Data Analysis (EDA) of features and targets.

### 2️⃣ Data Analysis

- Exploratory Data Analysis (EDA) with dynamic visualizations (Seaborn, Plotly).

- Calculation of correlations between variables (occupancy, climate, geographic location).

- Creation of dashboards in Looker and interactive notebooks for results interpretation.

- Heatmaps and comparative graphs by hospital and province.

### 3️⃣ Machine Learning

- Training of regression and classification models: Random Forest, Linear Regression, XGBoost, MLPRegressor, Logistic Regression
- Performance evaluation using metrics: R², MAE, AUC-ROC, Precision-Recall
- Final selection of the Random Forest model due to its robustness and balanced performance.

- Generation of occupancy predictions and forecasts until December 2025.

### 4️⃣ Automation and Monitoring

- Daily scheduled execution using GitHub Actions (cron).

- Sending alerts via Telegram Bot API when critical levels are detected.

- Log storage and traceability in the repository.

### 5️⃣ Interactive Application (ChromeAI Bot)

- Browser extension developed with JavaScript, HTML, and CSS.

- Local reading and processing of CSV files using PapaParse.

- Real-time visualization of predictions and indicators.

- Educational and accessible interface for non-technical users.

------
## 🤖 Main Results

- Top Models: Random Forest and Logistic Regression (AUC-ROC = 0.92)
- Confusion matrix with 86% overall accuracy.

- Linear Regression offers the best accuracy for general occupancy.

- Random Forest is established as the most robust and versatile model, especially for critical ICU prediction.

----
## 🔮 Forecasting (Future Prediction)

- Random Forest model forecast from June to December 2025.
- Stable prediction (range 420–480 beds) with seasonal fluctuations.

- Disaggregated analysis by province and hospital shows key regional differences.

- Identification of temporary peaks and critical outliers for resource management.

-----

## 💬 Hospital Prediction Bot – ChromeAI

Interactive JavaScript tool that analyzes hospital data and bed occupancy predictions from CSV files. Includes a chat-like assistant that answers questions in natural language about historical data and future projections.

📈 Main Features

- Loading and analysis of historical data and predictions.

- Calculation of averages by hospital or province.

- Identification of the day with the highest occupancy.

- Trend detection and query of higher predictions.

- Simple chatbot interface for interactive queries.

🧠 Questions the bot can answer

- Overall average bed occupancy.

- Busiest hospital.

- Average by hospital or province.

- Day with the highest occupancy.

- Bed occupancy prediction for tomorrow.

- Trend of predictions.

--

## 💢 Hospital Monitoring Automation with Intelligent Agents

Hospital automation and monitoring system that integrates two Python agents orchestrated using GitHub Actions.

Each agent fulfills a role within the predictive pipeline:

🧩 Agent 1: Automatically synchronizes hospital occupancy data from Google Drive to Google Sheets, ensuring daily updates to the database.

🤖 Agent 2: Analyzes the most recent data, evaluates actual and projected occupancy levels, and sends automatic alerts via Telegram in case of critical situations.

This system complements the main project, Predictive Model of Health Deterioration in Hospitalized Patients in Spain, extending it with automation, continuous integration, and intelligent monitoring capabilities.

----

## 🗂️ Estructura del Repositorio

```bash
📁 Hospital Forecasting Project/
├── data/
│     ├── raw/                                                                  # Original data
│     └──clean/                                                                 # Clean data ready for analysis
│         ├── predictions_random_forest.csv                                     # ML Forecasting Dataset
│         ├── forecast_random_forest_rest_2025_.csv                             # ML Dataset of the chosen model
│         └── 1_hospital_beds_climate_encoded.csv                               # Data Engineer Dataset
│
├── Data Analysis/
│     ├── Analysis_and_Visualization_of_Hospital_Demand01.ipynb                 # Data Analyst Code
│     ├── DA Images/                                                            # Data Analyst Visualizations and Charts
│     └── Data for Visualization/looker_hospital_demand                         # Data Analyst Dataset
│         ├── peak_valley_alerts.csv
│         ├── historical_database.csv
│         ├── correlation_matrix.csv
│         └── ensemble_forecast.csv
│
├── Data Engineer/                                                              # Data Engineer Codes
│     └── Cleaning and Ingestion_28_10.ipynb
│
│
├── Machine_Learning/
│     ├── ML_Code.ipynb                                                         # Machine Learning Engineer Code
│     └── figures/                                                              # Machine Learning Engineer visualizations and graphs
│          ├── forecasting/
│          ├── chosen_model/
│          └── models/
│
├── Hospital-Prediction-Bot-ChromeAI/
│     │
│     ├── popup.html                                                            # Main interface
│     ├── popup.js                                                              # Analysis logic and interactive bot
│     ├── papaparse.min.js                                                      # Library for reading and processing CSV files
│     ├── manifest.json                                                         # Chrome extension configuration (ChromeAI)
│     ├── style.css                                                             # (optional) Visual styles
│     ├── data/
│     │   ├── hospital_data.csv                                                 # Dataset Data Engineer
│     │   └── predictions.csv                                                   # Dataset ML Forecasting
│     │
│     ├── icon128.png                                                           # High-resolution icon
│     ├── icon48.png                                                            # Bot icon (for the extension)
│     └── icon16.png                                                            # Small icon that appears in the Chrome extensions bar
│
├── Automation_Agents/
│     ├── Agent1_data.py                                                        # Agent that synchronizes data from Google Drive to Google Sheets
│     ├── Agent2_alerts.py                                                      # Agent that analyzes occupancy and sends alerts
│     ├── data/                                                                 # Clean data ready for analysis
│     │     ├── hospital_data.csv                                               # Data Engineer Dataset
│     │     └── predictions.csv                                                 # ML Forecasting Dataset
│     └── image/                                                                # Agent visualizations and graphs
│
├── .github/
│     └── workflows/
│         ├── Agent1.yaml                                                       # Agent Workflow 1: Drive → Sheets Data Synchronization
│         └── Agent 2.yaml                                                      # Agent 2 Workflow: Analyzes data and generates occupancy alerts via Telegram
│
├── results/
│     ├── media/                                                                # Data Engineer visualizations and charts
│     ├── EXPLORATORY ANALYSIS REPORT.md                                        # Data Engineer's Hospital Occupancy Report
│     ├── Machine_Learning_Report.md                                            # Hospital Occupancy Modeling and Forecasting Report
│     ├── Bot Report – ChromeAI.md                                              # Chrome AI Bot Overview
│     ├── Agents Report.md                                                      # Automation Agents Overview
│     ├── AI Bot Image                                                          # Chrome AI Bot Visualizations
│     ├── Agents Image                                                          # Automation Agent Visualizations
│     ├── Hospital Technical Report.md                                          # Results-Based Planning Report and Technical Documentation
│     └── Hospital Demand Analysis and Visualization.pdf                        # Power BI or Plotly Dashboards
│
├── README.md                                                                   # Project overview
└── requirements.txt                                                            # Libraries required to run the project
```

---

## 🛠️ Instructions for Running the Notebook

1. Clone or download the repository:

```bash
git clone https://github.com/username/project.git
cd project
```

2. Create a virtual environment (optional, recommended):
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

3. Install the necessary dependencies:
```bash
pip install -r requirements.txt
```

4. Open the notebook:

- Google Colab: Upload the notebook and the data, and run the cells.

- Jupyter Notebook / VSCode: Open notebooks/Project.ipynb and run the cells sequentially.

5. Run Cells:

- Recommended order: data cleaning → feature/target definition → model training → evaluation → forecasting → results export.

- Data CSV files should be located in the data/ folder.

6. Export Results:

- CSV files with predictions are generated in data/ by default.

- Graphs and figures are saved in results/media/ and Machime_Learning/figuras.

-----

-----

## 📂 Project Access

- [Dashboard Looker](https://lookerstudio.google.com/reporting/42a8f2b3-c97a-4e49-9792-048cd5b342eb/page/7XDdF?s=p1pMHtUUhws)
- [Notebook Machine Learning](https://github.com/munozgnathaly-crypto/Proyecto-Predicci-n-hospitalaria/blob/main/Machine_Learning/ML_Code.ipynb)
- [Notebook [Analysis](https://github.com/munozgnathaly-crypto/Proyecto-Predicci-n-hospitalaria/blob/main/Data%20Analyst/An%C3%A1lisis_y_Visualizaci%C3%B3n_de_Demanda_Hospitalaria01.ipynb)
- [Notebook Data Engineer](https://github.com/munozgnathaly-crypto/Proyecto-Predicci-n-hospitalaria/tree/main/Data%20Engineer)

- [Machine Learning Executive Report](https://github.com/munozgnathaly-crypto/Proyecto-Predicci-n-hospitalaria/blob/main/results/Resumen_ejecutivo_ML.md)
- [Data Report [Engineer](https://github.com/munozgnathaly-crypto/Proyecto-Predicci-n-hospitalaria/blob/main/results/REPORTE_DE_ANALISIS_EXPLORATORIO_22.md)
- [Hospital Prediction Bot – ChromeAI](https://github.com/munozgnathaly-crypto/Proyecto-Predicci-n-hospitalaria/blob/main/results/README%20%20Bot%20%E2%80%93%20ChromeAI.md)
- [Hospital Prediction Intelligent Agents](https://github.com/munozgnathaly-crypto/Proyecto-Predicci-n-hospitalaria/blob/main/results/Readme%20Agentes.md)

---

## Authors

Project developed as part of a work simulation in [NoCountry](https://nocountry.tech/), where we worked as a team using an agile methodology, integrating technical roles such as Data Engineer, Data Analyst, Machine Learning Engineer, and Automation Engineer.

| **Nathaly Muñoz** | **Bárbara Ortiz** | **Valeria Donnet** |

:---:|:---:|:---:|

<img src="https://github.com/user-attachments/assets/8110c040-c424-4c9b-9a07-4d725d4023b9" width="120"><br>Data Analyst<br>[LinkedIn](https://www.linkedin.com/in/munozgnathaly/)<br>[GitHub](https://github.com/munozgnathaly-crypto) | <img src="https://github.com/user-attachments/assets/5b09823d-e7eb-4752-97c0-35fc774584d3" width="120"><br>Machine Learning Engineer and <br> Automation Engineer <br>[LinkedIn](https://www.linkedin.com/in/barbaraangelesortiz/)<br>[GitHub](https://github.com/BarbaraAngelesOrtiz) | <img src="https://github.com/user-attachments/assets/5cacc273-213b-4b0b-bde2-f60b2f990137" width="120"><br>Data Engineer<br>[LinkedIn](https://www.linkedin.com/in/valeria-donnet/)<br>[GitHub](https://github.com/valedonnet) |


![Status](https://img.shields.io/badge/status-finished-brightgreen) 📅 October 2025

![Python](https://img.shields.io/badge/python-3.10-blue)
![NumPy](https://img.shields.io/badge/numpy-1.26.0-blue)
![Pandas](https://img.shields.io/badge/pandas-2.1.0-blue)

![scikit-learn](https://img.shields.io/badge/scikit--learn-1 .3.0-orange)
![XGBoost](https://img.shields.io/badge/xgboost-1.7.6-red)

![Matplotlib](https://img.shields.io/badge/matplotlib-3.8.0-blue)
![Seaborn](https://img.shields.io/badge/seaborn-0.12.2-pink)
![Plotly](https://img.shields.io/badge/ plotly-5.16.1-lightblue)

![JavaScript](https://img.shields.io/badge/JavaScript-yellow)
![PapaParse](https://img.shields.io/badge/PapaParse-lightgrey)
![HTML+CSS](https://img.shields.io/badge/HTML%2BCSS-blue)
![CSV](https://img.shields.io/ badge/CSV-brightgreen)

![GoogleAPI](https://img.shields.io/badge/Google_API-integrated-yellow)
![Telegram](https://img.shields.io/badge/Alerts-Telegram-blueviolet)
![GitHubActions](https://img.shields.io/badge/CI-GitHub_Actions-black)

## Acknowledgments

![nocountrytalent_cover2](https://github.com/user-attachments/assets/b6e30061-b91e-45c6-b44a-06b3be490790)
