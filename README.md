# 🍋 Little Lemon - Table Reservation App  
**Meta Front-End Developer Capstone Project**

Este proyecto es una aplicación de reservas para el restaurante ficticio **Little Lemon**, creada como parte del _Capstone Project_ del certificado de **Meta Front-End Developer**.

Incluye un formulario avanzado de reservas, validación con Formik + Yup, navegación con React Router, pruebas unitarias con React Testing Library y un diseño moderno.

---

## 🚀 Características principales

✔ Formulario de reservas totalmente funcional  
✔ Validación con **Formik** y **Yup**  
✔ Navegación mediante **React Router DOM v7**  
✔ Componente de confirmación con redirección automática  
✔ Tests unitarios incluidos  
✔ Código limpio y estructurado  
✔ Diseño responsive y moderno  
✔ Control de inputs:  
   - No permite negativos  
   - No permite valores > 10  
   - No permite valores vacíos  

---

## 📦 Tecnologías utilizadas

- React 19  
- React Router DOM v7  
- Formik  
- Yup  
- React Testing Library  
- Jest  
- CSS puro

---

## 📁 Estructura del proyecto

little-lemon/
│── public/
│── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ ├── BookingPage.js
│ │ ├── BookingForm.js
│ │ ├── ConfirmedBooking.js
│ ├── utils/
│ │ ├── api.js
│ ├── App.js
│ ├── App.test.js
│ ├── index.js
│── README.md
└── package.json

yaml
Copiar código

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio

git clone https://github.com/JhotaUrbano/little-lemon-capstone.git
cd little-lemon-capstone

shell
Copiar código

### 2️⃣ Instalar dependencias

npm install

shell
Copiar código

### 3️⃣ Instalar dependencias adicionales necesarias

npm install react-router-dom formik yup

shell
Copiar código

### 4️⃣ Ejecutar el servidor de desarrollo

npm start

yaml
Copiar código

La app estará disponible en:  
👉 http://localhost:3000

---

## 🧪 Ejecutar los tests

El proyecto incluye pruebas unitarias proporcionadas por Meta y pruebas propias.

Para ejecutarlas:

npm test

yaml
Copiar código

Si Jest pregunta algo en modo interactivo, puedes pulsar:

- `a` → ejecutar todos los tests  
- `q` → salir  
- `f` → ejecutar solo tests fallidos  

---

## 🔧 Solución a errores comunes

### ❗ Error de `react-router-dom` en tests
Si aparece algo como:

> Cannot find module 'react-router-dom'

Debes instalar:

npm install react-router-dom

yaml
Copiar código

---

## 📸 Capturas (opcional)

Puedes añadir capturas aquí si quieres:

/screenshots/home.png
/screenshots/form.png
/screenshots/confirmation.png

yaml
Copiar código

---

## 👨‍💻 Autor

**José Urbano**  
📚 Meta Front-End Developer  
💼 Full Stack Developer  
🔗 GitHub: https://github.com/JhotaUrbano  

---

## 📝 Licencia

Este proyecto es únicamente para fines educativos como parte del programa **Meta Front-End Developer**.
