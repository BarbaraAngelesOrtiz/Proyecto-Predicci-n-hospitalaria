# Prediccion Hospitalaria Bot ChromeAI

Una herramienta interactiva desarrollada en JavaScript que permite analizar datos hospitalarios y predicciones de ocupación de camas a partir de archivos CSV.
El proyecto incluye un asistente integrado que responde preguntas en lenguaje natural, procesando tanto datos históricos como predicciones futuras.

Los archivos csv de datos historicos y predicción forecasting son producto del proyecto [Modelo Predictivo de Deterioro de Salud en Pacientes Hospitalizados en España](https://github.com/BarbaraAngelesOrtiz/Proyecto-Predicci-n-hospitalaria)

----

## 🚀 Características principales

✅ Carga y análisis de datos históricos hospitalarios (hospital_data.csv)

✅ Carga opcional de datos de predicciones (predicciones.csv)

✅ Cálculo automático de promedios por hospital o provincia

✅ Identificación del día con mayor ocupación

✅ Detección de tendencias en las predicciones

✅ Consulta de la predicción más alta registrada y de un dia especifico:mañana

✅ Interfaz tipo chat-bot, simple e intuitiva, para realizar consultas interactivas

<img width="577" height="711" alt="imagen 1" src="https://github.com/user-attachments/assets/3406933f-f95e-40bd-aba7-867ccb18bfa1" />

----

## 💬 Preguntas que el bot puede responder

Se puede escribir directamente alguna de estas frases (o similares):

| 🧠 Pregunta                                     | 📊 Qué hace                                                                   |
| ----------------------------------------------- | ----------------------------------------------------------------------------- |
| ¿Cuál es el promedio general de camas ocupadas? | Calcula el promedio global de camas ocupadas en todos los registros           |
| ¿Cuál es el hospital más ocupado?               | Devuelve el hospital con mayor promedio de ocupación                          |
| Promedio por hospital                           | Muestra el promedio de camas ocupadas por hospital                            |
| Promedio por provincia                          | Muestra el promedio por provincia                                             |
| ¿Cuál fue el día con más ocupación?             | Indica la fecha con mayor número de camas ocupadas                            |
| ¿Cuál es la predicción de camas para mañana?    | Busca en el archivo de predicciones el valor correspondiente al día siguiente |
| ¿Cuál es la tendencia de las predicciones?      | Analiza si las predicciones aumentan, bajan o se mantienen estables           |
| ¿Cuál fue la predicción más alta?               | Informa el valor máximo proyectado y su fecha correspondiente                 |

<img width="597" height="733" alt="imagen 8" src="https://github.com/user-attachments/assets/a06274e9-9bc5-4159-a0e9-30973635a8a9" />

----

## 🧩 Tecnologías utilizadas
- JavaScript 
- PapaParse → lectura y procesamiento de archivos CSV
- HTML + CSS → estructura y diseño visual
- Datos CSV → entradas del modelo histórico y de predicción

----

## 📊 Ejemplo de salida

🏥 Hospital más ocupado: Hospital_Central (431.5 camas promedio)

📅 Día con mayor ocupación: 2025-09-14 (512 camas)

📈 Las predicciones muestran una tendencia al alza (8.4% de aumento)

🏥 Predicción más alta registrada: 501.01 camas (2025-10-16)

----

## Author
**Bárbara Ángeles Ortiz**

<img src="https://github.com/user-attachments/assets/30ea0d40-a7a9-4b19-a835-c474b5cc50fb" width="115">

[LinkedIn](https://www.linkedin.com/in/barbaraangelesortiz/) | [GitHub](https://github.com/BarbaraAngelesOrtiz)

![Status](https://img.shields.io/badge/status-finished-brightgreen) 📅 Octubre 2025

![JavaScript](https://img.shields.io/badge/JavaScript-yellow)
![PapaParse](https://img.shields.io/badge/PapaParse-lightgrey)
![HTML+CSS](https://img.shields.io/badge/HTML%2BCSS-blue)
![CSV](https://img.shields.io/badge/CSV-brightgreen)
