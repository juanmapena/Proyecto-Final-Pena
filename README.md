# 🎓 Calculadora Académica - Borcelle Academy

Una aplicación web desarrollada con JavaScript, HTML y CSS que permite a estudiantes calcular su condición académica según sus calificaciones.  
Incluye funcionalidades interactivas, historial persistente, diseño responsive y consumo de una API externa para mostrar universidades asociadas.

---

## 📌 Descripción

Este proyecto simula una herramienta de análisis académico para los alumnos de **Borcelle Academy**, donde el usuario puede:

- Ingresar su nombre, materia y dos calificaciones.
- Calcular automáticamente el promedio.
- Obtener un mensaje con su **condición académica**: Aprobado o Desaprobado.
- Ver un **historial guardado** localmente.
- Explorar universidades asociadas a través de una **API externa**.

---

## 🧪 Tecnologías utilizadas

- HTML5 + CSS3 (SASS-ready)
- JavaScript moderno (ES6+)
- Bootstrap 5.2
- SweetAlert2 (para notificaciones interactivas)
- API externa: U.S. College Scorecard (Data.gov)
- LocalStorage (para persistencia de datos en navegador)

---

## 🎯 Funcionalidades

✅ Ingreso de datos y validaciones  
✅ Cálculo de promedio con visualización de resultado  
✅ Alertas dinámicas usando SweetAlert2  
✅ Historial persistente con LocalStorage  
✅ Diseño responsive con Bootstrap  
✅ Menú móvil hamburguesa con JS  
✅ Llamado a API externa con `fetch` y manipulación de DOM

---

## 🚀 Cómo ejecutar el proyecto

Observá el proyecto a través del siguiente link:
https://juanmapena.github.io/Proyecto-Final-Pena/

---

🌐 API utilizada

Se consume la API pública de universidades de EE. UU. :

https://api.data.gov/ed/collegescorecard/v1/schools

Se utiliza la apiKey propia para obtener datos como nombres de instituciones.

Los resultados se muestran dinámicamente en el DOM con estilos personalizados.

