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
