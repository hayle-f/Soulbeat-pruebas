# SoulBeat - Landing Page

## 📄 Descripción
Landing page **SoulBeat** responsive para promocionar auriculares, con diseño moderno y animaciones suaves.  
Muestra productos, permite agregar y quitar favoritos, gestiona el carrito de compras, permite cambiar entre tema claro y oscuro, y persiste la información usando `localStorage`. También integra notificaciones personalizadas (Toasts) y conexión con la API para datos de productos.

---

## ⚙️ Estructura del proyecto

- **App.jsx** → Componente raíz. Monta la estructura general con los componentes de la aplicación.  
- **Home.jsx** → Página principal con Hero y secciones destacadas de auriculares.  
- **Products.jsx** → Página de productos, gestiona favoritos y carrito.  
- **Checkout.jsx** → Página de checkout y gestión del carrito de compras.  
- **FaqsSubscription.jsx** → Página de FAQs y suscripción.  
- **Profile.jsx** → Página de perfil de usuario.  

### 🧩 Componentes principales

- **Navbar / NavbarMenu.jsx** → Barra de navegación con menú hamburguesa.  
- **CardProduct.jsx** → Card individual de cada auricular, mostrando imagen, nombre, precio y botones para agregar o quitar de favoritos o carrito.  
- **ModalFavs.jsx** → Modal emergente que lista los productos favoritos.  
- **Cart.jsx / Cartitem.jsx** → Componente del carrito de compras e items individuales, con gestión de cantidades.  
- **CustomToast.jsx** → Notificaciones personalizadas para acciones. (agregar, eliminar, errores) 
- **Footer.jsx** → Sección inferior con logo, enlaces a redes sociales y derechos reservados.  
- **AuricularSlider.jsx** → Slider de auriculares destacados en la home.
---

## 🛠 Tecnologías utilizadas

- React (JSX)
- Tailwind CSS
- Framer Motion (para animaciones)
- React Router DOM (navegación entre páginas)
- React Hooks (`useState`, `useEffect`, hooks personalizados)
- LocalStorage para persistencia de favoritos y carrito
- Axios (para llamadas a API, si corresponde)
- Context API (para manejo de estado global: carrito, tema)
---

## ⚡ Funcionalidades

- Menú responsive en desktop y mobile  
- Cards de productos con interacción de favoritos  
- Modal para ver y eliminar favoritos  
- Carrito de compras con gestión de cantidades y eliminación de productos  
- Notificaciones personalizadas con **CustomToast**  
- Persistencia de favoritos y carrito usando `localStorage`  
- Diseño adaptativo a diferentes tamaños de pantalla  
- Animaciones suaves combinando **Framer Motion** y **Tailwind CSS**  
- Tema claro/oscuro con persistencia en `localStorage` 
---

## 📁 Estructura de carpetas

```
   📁 public/ # Archivos públicos y recursos estáticos
   ┣ 📁 imgs/ 
   ┃ ┣ inEar/ 
   ┃ ┣ onEar/ 
   ┃ ┣ OverEar/ 
   ┃ ┗ payments/ 
   

   📁 src/ # Código fuente
   ┣ App.jsx # Componente raíz de la aplicación
   ┣ index.css # Estilos globales
   ┣ main.jsx # Punto de entrada de React
   ┣ 📁 assets/

   ┣ 📁 api/ # Funciones para conectar con la API
   ┃ ┗ aurisAPI.js    

   ┣ 📁 components/ # Componentes de la aplicación
   ┃ ┣ AuricularSlider.jsx # Componente para slider de auriculares
   ┃ ┣ CardProduct.jsx # Card que muestra información de cada auricular
   ┃ ┣ Cart.jsx # Componente del carrito de compras
   ┃ ┣ Cartitem.jsx # Item individual del carrito
   ┃ ┣ CustomToast.jsx # Notificaciones personalizadas
   ┃ ┣ ModalFavs.jsx # Modal de favoritos 
   ┃ ┣ 📁 faqs-subs/ # Componentes relacionados a FAQs y suscripciones
   ┃ ┃ ┣ FaqItem.jsx # Item individual de FAQ
   ┃ ┃ ┣ Faqs.jsx # Lista de FAQs
   ┃ ┃ ┗ Subscription.jsx # Componente de suscripciones
   ┃ ┣ 📁 Footer/ # Footer de la aplicación
   ┃ ┃ ┗ Footer.jsx 
   ┃ ┗ 📁 Navbar/ # Barra de navegación
   ┃     ┣ MenuUser.jsx # Menú de usuario
   ┃     ┣ Navbar.jsx # Navbar principal
   ┃     ┗ NavbarMenu.jsx 

   ┣ 📁 context/ # Contextos de React para manejo de estado global
   ┃ ┣ AurisContext.jsx # Contexto principal de la app
   ┃ ┣ CartContext.jsx # Contexto del carrito de compras
   ┃ ┗ ThemeContext.jsx # Contexto para manejo de tema (claro/oscuro)

   ┣ 📁 hooks/ # Hooks personalizados
   ┃ ┣ useOpen.js # Hook para manejar estado de modales
   ┃ ┗ useWishlist.js # Hook para manejar wishlist/favoritos

   ┣ 📁 pages/ # Páginas de la aplicación
   ┃ ┣ 📁 checkout/ # Página de checkout
   ┃ ┃ ┗ Checkout.jsx
   ┃ ┣ 📁 faqsSubscription/ # Página de FAQs y suscripciones
   ┃ ┃ ┗ FaqsSubscription.jsx
   ┃ ┣ 📁 home/ # Página principal
   ┃ ┃ ┣ Hero.jsx # Componente Hero
   ┃ ┃ ┣ Home.jsx # Página Home
   ┃ ┃ ┗ 📁 sections/ # Secciones de la página Home
   ┃ ┃     ┣ Section1.jsx
   ┃ ┃     ┣ Section2.jsx
   ┃ ┃     ┗ Section3.jsx
   ┃ ┣ 📁 products/ # Página de productos
   ┃ ┃ ┗ Products.jsx
   ┃ ┗ 📁 profile/ # Página de perfil de usuario
   ┃     ┗ Profile.jsx

   ┗ 📁 utils/ # Funciones y utilidades generales
      ┣ dataFaqs.js # Datos de FAQs
      ┗ utils.js # Funciones auxiliares
   
   ┃
   ┗ README.md

```

---

## 🚀 Ejecución

1. Clonar el repositorio:
```bash
git clone <URL-del-repo>
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el proyecto:
```bash
npm run dev
```

4. Abrir en el navegador:
```text
http://localhost:3000
```


<!-- 

<!-- 
      Lista resumida de pasos a seguir

    1-  Crear AuthContext (estado de usuario + login/logout/register).

    2-  Crear mock DB para probar login/register.

    3-  Modificar LoginRegister para que use el contexto.

    4-  Ajustar la app para condicionar botones y rutas según isAuthenticated.

    5-  Crear página Profile con menú lateral y contenido dinámico.

    6-  Revisar hooks de favoritos/carrito para que respeten login.

    7-  Integrar DB real si quieres persistencia.

    8-  Ajustes y mejoras: validaciones, mensajes, estilos.

 -->

 -->