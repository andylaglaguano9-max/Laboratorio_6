# Laboratorio 6: PWA y Docker

Este repositorio contiene el desarrollo del Laboratorio de Integración de Progressive Web Apps (PWA) y Contenedores Docker, realizado para la asignatura de Desarrollo Web.

## Arquitectura del Proyecto

El proyecto está dividido en dos partes principales:
- **Backend API**: API REST (Node.js/Express) que sirve los datos.
- **Frontend React (PWA)**: Aplicación web progresiva construida con Vite y React.

## Tecnologías Utilizadas

- **Frontend:** React, Vite, Vite PWA Plugin
- **Backend:** Node.js
- **Base de Datos:** MySQL
- **Contenedores:** Docker, Docker Compose
- **CI/CD:** GitHub Actions, Docker Hub

## Integración Continua (CI/CD)

Este repositorio cuenta con un pipeline automático configurado en GitHub Actions (`.github/workflows/ci.yml`) que se encarga de:
1. Instalar las dependencias de ambos proyectos.
2. Construir la PWA de React.
3. Crear las imágenes de Docker.
4. Etiquetar y subir automáticamente las imágenes a **Docker Hub**.
