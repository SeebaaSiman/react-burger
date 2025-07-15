# REACT BURGER

React Burger es un proyecto de e-commerce ficticio para una hamburguesería, desarrollado con React y Styled Components. Destaca por su diseño minimalista, el uso de sombras 3D y animaciones sutiles, colores vivos representando los detalles de una buena hamburguesa.

Es un proyecto para el curso de TalentoTech 2025 React.

## ✨ Características Principales

- **Landing Page Atractiva:** Diseño minimalista y moderno enfocado en la presentación del producto.
- **Visualización de Productos:** Presentación de hamburguesas utilizando imágenes (o placeholders para) 3D.
- **Componentes Reutilizables:** Construido siguiendo las mejores prácticas de React para la creación de componentes modulares.
- **Styled Components:** Todo el estilizado se maneja con Styled Components, demostrando su poder para crear UIs dinámicas y encapsuladas sin librerías de UI externas.
- **Responsive Design:** Interfaz adaptable a diferentes tamaños de pantalla.

```
 const size = {
            mobileS: '320px',
            mobileM: '375px',
            mobileL: '425px',
            tablet: '768px',
            laptop: '1024px',
            laptopL: '1440px',
            desktop: '2560px',
          }
```

## 🛠️ Tecnologías Utilizadas

- **React:** (v19) Biblioteca principal para la construcción de la interfaz de usuario.
- **Styled Components:** Para el estilizado de componentes a nivel de CSS-in-JS.
- **JavaScript (ES6+):** Lenguaje de programación base.
- **React Router Dom**
- **Vite como entorno de desarrollo**
- **Git y GitHub:** Para el control de versiones y alojamiento del repositorio.

## 🪝 Hooks Personalizados

Este proyecto incluye varios hooks personalizados que mejoran la experiencia de usuario y la organización del código.

### `useCartType`

Hook que maneja la lógica del botón carrito que aparece en varias parte de la app. Este hook maneja mensajes de notificación, iconos, textos y funciones específicas para cada botón cart.

### `useNavBar`

Sincroniza la navegación de categorías con el scroll de la página. Permite que el navbar se actualice automáticamente según la sección visible y gestiona el indicador visual y el scroll suave al hacer click en una categoría.

### `useIntersectionObserver`

Detecta si un elemento está visible en el viewport usando la API de Intersection Observer. Es utilizado para saber qué sección está activa en el menú y actualizar el navbar dinámicamente. El hook evalúa si debe instalar el polyfill.

### `useFiltered`

Filtra productos en tiempo real según la búsqueda del usuario. Devuelve los resultados filtrados y gestiona el estado del input de búsqueda.

### `useForm`

Facilita la gestión de formularios controlados, validaciones y manejo de errores. Permite definir reglas de validación y obtener el estado de los campos y errores.

### `useLocalStorage`

Permite guardar y recuperar información en el localStorage de manera reactiva. Útil para persistir datos como el carrito, preferencias de usuario o sesión.

### `useMenu`

Gestiona el estado de apertura/cierre del menú lateral y otras acciones relacionadas con la navegación principal.

### `useClock`

Devuelve la hora actual y la actualiza en tiempo real. Se utiliza para mostrar el horario en el sidebar y en la interfaz principal.

### `usePageVisibility`

Detecta si la pestaña está activa o si el usuario ha cambiado de ventana, permitiendo mostrar mensajes o pausar procesos según la visibilidad.

### `useSideBar`

Maneja el comportamiento del side bar nav en el componente Admin.

### `useThemeMode`

Evalua la selección del usuario para tema claro / oscuro.

### `useWindowWidth`

Cada vez que el viewport (o ventana del navegador) cambia su ancho (width) este hook lo detecta y devuelve el valor.

Cada hook está ubicado en la carpeta `src/hooks/` y puede ser reutilizado en cualquier componente del proyecto.

## 🚀 Instalación y Puesta en Marcha

Sigue estos pasos para configurar el proyecto en tu entorno local:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/SeebaaSiman/react-burger](https://github.com/SeebaaSiman/react-burger)
    ```
2.  **Navega al directorio del proyecto:**

    ```bash
    cd react-burger
    ```

3.  **Instala las dependencias:**

    ```bash
    npm install
    # o si usas yarn
    # yarn install
    ```

4.  **Inicia el servidor de desarrollo:**

    ```bash
    yarn start

    ```

5.  Abre tu navegador y visita `http://localhost:3000` (o el puerto que indique tu consola).

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm start` o `yarn start`:
  Inicia la aplicación en modo de desarrollo.

- `npm run build` o `yarn build`:
  Compila la aplicación para producción en la carpeta `build`.

## 🙏 Agradecimientos

Por la paciencia y calidad de cada clase.

🙋🏻‍♂️ [Tutor]: Ber Schargorodsky
🙋🏻‍♂️ [Instructor]: Emiliano Del Arco
