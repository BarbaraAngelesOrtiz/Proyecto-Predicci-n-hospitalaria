# 🏥 Informe de Planificación Basada en Resultados y Documentación Técnica

**Proyecto:** Modelo Predictivo de Deterioro de Salud en Pacientes Hospitalizados  
**Repositorio base:** Proyecto-Predicci-n-hospitalaria  
**Versión:** 1.0 — Octubre 2025  
**Elaborado por:** Equipo de Ciencia de Datos | HealthTech Analytics  

---

# 📊 **Resumen Ejecutivo – Predicción y Automatización Hospitalaria Basada en IA**

El presente informe consolida el desarrollo de un **ecosistema inteligente de monitoreo hospitalario**, diseñado para anticipar la **ocupación de camas y riesgos de saturación** en hospitales de Castilla y León, España.  

El sistema integra modelos de **machine learning predictivo** con **automatización inteligente en tiempo real**, ofreciendo una herramienta escalable para la **planificación operativa y la toma de decisiones en salud pública**.

La arquitectura permite anticipar picos de demanda, optimizar recursos y fortalecer la respuesta operativa de las instituciones de salud.

---

## 🎯 Objetivo del informe

Consolidar recomendaciones de planificación operativa y técnica derivadas de los análisis predictivos del proyecto.
Desarrollar una arquitectura de datos y automatización capaz de:

- Predecir la ocupación hospitalaria con alta precisión.  
- Monitorear y actualizar datos en tiempo real.  
- Emitir **alertas automáticas** ante escenarios de riesgo.  
- Servir como base para **decisiones operativas, estratégicas y de planificación** en sistemas de salud.
  
---

## 🏨 Recomendaciones de planificación hospitalaria

- **Gestión de camas:** Umbral dinámico del 85 % de ocupación y redistribución entre servicios.  
- **Asignación de personal:** Rotación predictiva de turnos y reserva de personal flotante.  
- **Planificación de recursos:** Ajuste automático de inventarios mediante predicciones semanales.  
- **Integración de factores externos:** Uso de clima y eventos locales para calibrar modelos.  
- **Alertas ejecutivas:** Monitoreo en tiempo real con severidad categorizada.

---

## 🧩 Documentación técnica

- **Estructura modular** del repositorio (`data`, `notebooks`, `api`, `results`).  
- **Modelos predictivos:** Linear Regression, MLPRegressor, Random Forest Regressor, XGBoost Regressor y Logistic Regression con métricas RMSE, MAPE, MAE, AUC.  
- **Pipeline de actualización y alertas** basado en datos limpios y reentrenamiento continuo.  
- **Integración con dashboards** en [Looker Studio](https://lookerstudio.google.com/reporting/42a8f2b3-c97a-4e49-9792-048cd5b342eb/page/7XDdF?s=p1pMHtUUhws) y almacenamiento seguro en Drive/GitHub.

---

## ⚙️ **Componentes principales**

### 1️⃣ Modelado predictivo de ocupación hospitalaria  
Se entrenaron modelos de regresión y clasificación sobre datos históricos multivariados, evaluando su desempeño para estimar la ocupación total, de planta y UCI.  
Los modelos analizados incluyen:

- **Linear Regression**  
- **MLPRegressor (Red Neuronal Multicapa)**  
- **Random Forest**  
- **XGBoost**  
- **Logistic Regression (para clasificación)**  

El modelo **Random Forest** fue seleccionado por su **precisión, estabilidad y robustez operativa**.  
En etapas futuras, se prevé incorporar modelos de **series temporales** (*ARIMA, Prophet y LSTM*) para enriquecer las proyecciones y detectar patrones estacionales.

---

### 2️⃣ Automatización mediante agentes inteligentes  
El sistema utiliza **GitHub Actions** y **Python** para ejecutar agentes que automatizan la recolección, análisis y notificación de resultados:

- 🤖 **Agente 1:** sincroniza datos entre **Google Drive y Google Sheets**, actualizando diariamente los registros hospitalarios.  
- 📈 **Agente 2:** analiza los datos, genera predicciones y **envía alertas automáticas por Telegram** cuando se detectan umbrales críticos de ocupación (≥85% real o ≥95% proyectada).  

Este flujo garantiza **monitoreo continuo, trazabilidad y respuesta temprana** ante escenarios de alta demanda hospitalaria.

---

### 3️⃣ Interfaz interactiva y documentación técnica  
La herramienta **ChromeAI Bot** permite explorar los datos hospitalarios mediante **consultas en lenguaje natural**, brindando acceso intuitivo a información analítica y predictiva.  

La documentación incluye la descripción de la arquitectura, los pipelines, las métricas de desempeño y las recomendaciones derivadas de los resultados de predicción del modelo.

---

## 📊 Resultados y conclusiones analíticas

1. Las variables climáticas y de morbilidad son determinantes clave en la saturación hospitalaria.  
2. Las provincias con mayor densidad urbana presentan volatilidad operativa significativa.  
3. **Random Forest** alcanzó un rendimiento sobresaliente (R² ≈ 0.96, MAE ≈ 26 camas).  
4. Las alertas automáticas permiten anticipar saturaciones con **2 semanas de margen**.  
5. **Looker Studio** facilita decisiones basadas en evidencia y seguimiento ejecutivo.
6. **Pipeline 100% automatizado**: GitHub Actions + Google Sheets + Telegram.
7. **Predicciones 2025** muestran estabilidad general, con picos localizados en **Soria** y **Salamanca**.
8. Recomendaciones: implementar **umbral dinámico de 85%**, redistribución predictiva de recursos y monitoreo basado en evidencia.

---

## 🚀 Próximos pasos

- Implementar **simuladores de escenarios epidémicos y estacionales**.  
- Crear **API pública** y conexión en vivo con **BigQuery**.  
- Desarrollar **pipeline de aprendizaje continuo**.  
- Integrar **alertas con Slack y correo institucional**.
- Evaluar despliegue cloud en **GCP/ Azure / OCI**.

---

**Informe elaborado por:**  
Equipo de Ciencia de Datos – HealthTech Analytics  

**Contacto técnico:**  
📧 munozgnathaly@gmail.com | barbaraortiz1501@gmail.com | valedonnet@gmail.com
