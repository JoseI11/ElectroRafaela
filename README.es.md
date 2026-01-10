
# Electro Rafaela

🌐 Leer en: [Español](README.es.md) | [English](README.md) 



## Descripción
Electro Rafaela es una aplicación web que simula una tienda online de productos electrónicos.

Los usuarios pueden navegar productos, filtrarlos por categoría, ver el detalle de cada producto y gestionar un carrito de compras.

Los datos se almacenan en Firebase Realtime Database y las imágenes de los productos se sirven desde PostImages para mantener el repositorio liviano.

## Demo

https://electro-rafaela.vercel.app

## Funcionalidades

- Listado de productos por categorías
- Vista de detalle de cada producto
- Funcionalidad de carrito de compras
- Interfaz limpia y sencilla

## Tecnologías
- **Next.js** – Elegido para una experiencia más completa como framework basado en React (ruteo, estructura y mejor organización del proyecto).
- **React** – Interfaz basada en componentes para un frontend modular y reutilizable.
- **JavaScript (ES6+)** – Lógica e interacciones de la aplicación.
- **TailwindCSS** – Estilos utility-first para un desarrollo de UI rápido y consistente, además de ser una herramienta con la que ya me siento cómodo.
- **Firebase Realtime Database** – Backend en tiempo real para almacenar y sincronizar datos de productos y carrito sin necesidad de construir una API propia.
- **PostImages** – Hosting de imágenes de productos para evitar almacenar muchos assets dentro del proyecto (manteniendo el repositorio limpio y liviano).
- **Vercel** – Deploy y hosting de la aplicación.

## Capturas de pantalla

![Home](https://github.com/user-attachments/assets/37eef036-5075-47fc-9127-1ed2fec2ae57)

## Instalación
```bash
git clone https://github.com/JoseI11/ElectroRafaela.git
cd ElectroRafaela
npm install
npm run dev
```
## Variables de entorno

Para ejecutar este proyecto, es necesario agregar las siguientes variables de entorno en un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```
## Próximas mejoras

- Mejorar la persistencia del carrito (mantenerlo entre sesiones).
- Agregar autenticación (los usuarios podrán conservar su carrito e historial).
- Crear un flujo de checkout (resumen de compra y confirmación).
- Añadir estados de carga, estados vacíos y un mejor manejo de errores.
