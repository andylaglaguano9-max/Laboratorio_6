# Laboratorio de Componentes React

Este proyecto es una Single Page Application (SPA) desarrollada con **React** y **Vite**, enfocada en la creación de componentes reutilizables, enrutamiento dinámico y consumo de APIs REST.

## Características Principales
- **Arquitectura de Componentes:** División lógica modular aislando componentes estructurales y visuales.
- **Enrutamiento (SPA):** Navegación fluida sin recargas de página utilizando `react-router-dom`.
- **Consumo de API:** Integración asíncrona con la API pública de Rick and Morty mediante `fetch` y `async/await`.
- **Estilos Encapsulados:** Uso intensivo de CSS Modules para evitar colisiones de estilos, manteniendo una paleta moderna con acabados glassmorphism.
- **Validación de Propiedades:** Verificación estricta mediante `prop-types` para asegurar la integridad de datos entre componentes.

## Requisitos Previos
- [Node.js](https://nodejs.org/) (Versión estable recomendada)
- Un manejador de paquetes (NPM o Yarn)

## Instalación y Ejecución Local
1. Clona este repositorio:
   ```bash
   git clone https://github.com/andylaglaguano9-max/Laboratorio_React.git
   ```
2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto
- `src/componets/`: Componentes atómicos y estructurales reutilizables (ConceptoCard, MateriaItem, PersonajeCard, Layout, Header, Footer).
- `src/pages/`: Vistas completas gestionadas condicionalmente por el enrutador (Inicio, Nosotros, Teams, Contactos, Personajes).
- `src/service/`: Lógica asíncrona centralizada para interactuar con servicios externos (API REST).

## Stack Tecnológico Utilizado
- React + Vite
- React Router DOM
- React Icons
- CSS Modules
- PropTypes

---
*Desarrollado como práctica académica de Ingeniería en Tecnologías de la Información.*
