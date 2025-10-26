# 📊 Resumen Ejecutivo – Modelado y Forecasting de Ocupación Hospitalaria
## 🎯 Objetivo General

Desarrollar y evaluar modelos predictivos (clasificación y regresión) para estimar la ocupación hospitalaria total, de planta y UCI, así como proyectar tendencias futuras (forecasting) para el año 2025.

El análisis completo está aqui: [Modelado y Forecasting](https://github.com/munozgnathaly-crypto/Proyecto-Predicci-n-hospitalaria/tree/main/Machine_Learning)

## 🧠 1. Selección del Modelo

🔹 Modelos Evaluados:

- Linear Regression
- MLPRegressor (Red Neuronal Multicapa)
- Random Forest
- XGBoost
- Logistic Regression (para clasificación)

Se analiza el dataset en 3 target: A Ocupación total, B ocupacion planta y C ocupación UCI. 
<img width="518" height="481" alt="Tabla Target, Modelo,MAE y R2" src="https://github.com/user-attachments/assets/072fce22-cb15-42b7-bd92-05e21b480ba4" />

También se grafican Heatmap de los resultados MAE y R2 por modelo y target, para sacar entender mejor los datos generales:
<img width="1182" height="490" alt="Heatmap Resumen visual general" src="https://github.com/user-attachments/assets/b0115a78-b697-4601-9af9-de16458301c1" />

Los gráficos de correlaciones entre variables base y morbilidad con targets, y variables de hospital / provincia (one-hot) con targets permiten seguir construyendo el análisis del modelado:
<img width="942" height="848" alt="Correlación de variables base y morbilidad con targets" src="https://github.com/user-attachments/assets/d1228b8b-9b4d-4d04-86d3-17521fa2c995" />
<img width="1296" height="682" alt="Correlación de variables de hospitalprovincia (one-hot) con targets" src="https://github.com/user-attachments/assets/5acbfb52-f6a5-4d8e-aef0-d10a9f7264fc" />

----------

## 🧩 2. Conclusiones Técnicas

🟦 Clasificación: Alta Ocupación

* Random Forest y Logistic Regression fueron los más robustos (AUC=0.92).
* El modelo logra distinguir con precisión entre alta y baja ocupación.
* Fallos residuales: 190 falsos negativos y 189 falsos positivos (en ~2800 observaciones).
* Las curvas ROC y Precision-Recall confirman excelente discriminación de clases.

Aqui algunos gráficos: 

<img width="691" height="547" alt="Curvas ROC comparativas" src="https://github.com/user-attachments/assets/d5977bd1-18ad-438e-a7db-7eaba29c48bd" />
<img width="691" height="547" alt="Curvas Precision–Recall comparativas" src="https://github.com/user-attachments/assets/12bc5104-1df1-4f40-8593-660b4a850b72" />
<img width="528" height="471" alt="matriz de confusion" src="https://github.com/user-attachments/assets/29994edc-cb2f-41e8-8758-6429d37d12cd" />
<img width="713" height="605" alt="Radar chart" src="https://github.com/user-attachments/assets/ce06de40-294d-45ba-92f7-5b2401f4a487" />



🟨 Regresión: Ocupación Específica

* Linear Regression ofrece un excelente desempeño en ocupación total y planta (R²=0.96, MAE≈26 camas).
* Random Forest sobresale en la predicción de ocupación UCI (MAE=2.51 camas).
* No se detectan sesgos sistemáticos, los errores son aleatorios y estables en el tiempo.
  
<img width="841" height="471" alt="Comparación de MAE entre modelos" src="https://github.com/user-attachments/assets/aee3399e-4ba5-43da-9fa1-6a097ea41dae" />
<img width="846" height="471" alt="Comparación de R² por modelo y target" src="https://github.com/user-attachments/assets/c24cca82-935d-4a4e-bdfc-99f69dcf62dd" />
<img width="855" height="393" alt="Histograma de errores" src="https://github.com/user-attachments/assets/f2ad73f6-bc8e-418c-aea5-12a56b7f11f0" />

🟩 Análisis de Errores

* Distribución de residuos centrada en cero (forma normal → sin sesgo).
* Outliers esporádicos entre junio 2023 y julio 2023 sugieren revisar eventos excepcionales.

<img width="1489" height="390" alt="Histogramas de error target A" src="https://github.com/user-attachments/assets/68944d05-5a72-4921-9836-dc5f49f875ac" />

--------------

## 🌳 3. Modelo Seleccionado: Random Forest
✅ Razones:

* Alto desempeño en todas las tareas (clasificación y regresión).
* Capacidad para manejar no linealidades y interacciones complejas.
* Errores bajos en variables críticas como la ocupación UCI.
* Robustez comprobada con distintos subconjuntos de datos.
* Se divide los datos de Entrenamiento(Train) desde: 2022-01-01 00:00:00 → 2024-09-29 00:00:00 y de Prueba (Test) desde: 2024-09-29 00:00:00 → 2025-05-31 00:00:00

Conclusión: Random Forest es el modelo más equilibrado y fiable para aplicaciones operativas y de planificación hospitalaria.

<img width="1315" height="548" alt="Ocupación Total Real vs Predicción Random Forest" src="https://github.com/user-attachments/assets/bf700bbf-393e-4955-9267-d291a2af43fe" />
<img width="1172" height="393" alt="Residuals plot (error vs fecha)" src="https://github.com/user-attachments/assets/2da00b8c-0728-4585-9ae4-34f011ed8e62" />
<img width="1589" height="590" alt="Train + Test + Predicción Random Forest" src="https://github.com/user-attachments/assets/7ced0f32-6c36-4056-a08b-e58f3de8de99" />

-------

## 📈 4. Forecasting 2025 (Predicción Futura)
🔹 Tendencia General

* El modelo predice estabilidad en la ocupación total (rango 420–480 camas).
* Distribución de predicciones con forma gaussiana, sin picos de crisis.
  
<img width="1005" height="471" alt="Forecast de ocupación total - resto de 2025" src="https://github.com/user-attachments/assets/32a96e5b-eee6-41c9-819d-4e2e1a188f11" />
<img width="1360" height="590" alt="Heatmaps de correlación" src="https://github.com/user-attachments/assets/b8944bdf-59cd-4b46-be81-2e0887eb0eb6" />
<img width="841" height="394" alt="Histogramas de predicciones" src="https://github.com/user-attachments/assets/f737bb9f-1ffc-47d7-bd2b-9266757c4936" />
<img width="841" height="393" alt="Distribución de errores simulados" src="https://github.com/user-attachments/assets/ff849ec1-add4-4fd9-924c-415b80a63c4a" />

🔹 Variabilidad Regional

* Provincias como Soria y Salamanca muestran alta volatilidad.
* Ávila y Segovia presentan comportamiento estable o decreciente.
* A nivel hospitalario, algunos centros muestran picos estacionales significativos.
  
<img width="339" height="340" alt="Tabla Variabilidad por hospital" src="https://github.com/user-attachments/assets/f50a0ea0-69dc-4cd2-86cd-f6fe8f8b6c02" />
<img width="543" height="377" alt="Tabla Variabilidad por provincia" src="https://github.com/user-attachments/assets/dc8d19ef-fb28-44fd-92dd-ba27f6f3ce62" />

🔹 Implicaciones para la Planificación

* Bajo riesgo de saturación global en 2025.
* Se recomienda monitorear los hospitales outliers con fluctuaciones extremas.
* Las predicciones futuras deben combinarse con variables externas (clima, eventos epidémicos, cambios demográficos) para mayor precisión.
  
<img width="1173" height="590" alt="Variabilidad temporal por hospital-" src="https://github.com/user-attachments/assets/1a9edaf8-d1ab-4084-9578-2c4e236cc03b" />
<img width="1186" height="590" alt="Variabilidad temporal por provincia-" src="https://github.com/user-attachments/assets/759d850f-7f9d-480f-850a-e12d241739d4" />

------

# 💡 Síntesis Ejecutiva

El modelo Random Forest proporciona un equilibrio óptimo entre precisión, interpretabilidad y robustez.
Su aplicación práctica puede optimizar la planificación hospitalaria, anticipar picos de demanda y reducir riesgos operativos, especialmente en unidades críticas como la UCI.
