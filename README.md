# Shoppingify-back

## Descripción General

`Shoppingify-back` es un servicio backend construido con NestJS. Utiliza TypeORM para las interacciones con la base de datos y proporciona una API robusta para gestionar productos, usuarios y carrito de compras.

## Características

- **Arquitectura Hexagonal:** El proyecto implementa una arquitectura hexagonal, promoviendo la separación de responsabilidades y facilitando la adaptación y extensión de la aplicación con nuevas características o integraciones.

- **Adaptadores y Puertos:** Utiliza un sistema de adaptadores y puertos para facilitar la comunicación entre las diferentes capas de la aplicación. Este diseño permite establecer límites claros entre la lógica del negocio central y los servicios externos, mejorando la capacidad de prueba y el mantenimiento.


## Autor

- [Anderson Vargas Sepúlveda](andersonvargas383@gmail.com)

## Tecnologías Utilizadas

- **Node.js**
- **NestJS**
- **TypeORM**
- **PostgreSQL**
- **Axios**
- **Class-validator**
- **Class-transformer**
- **Moment.js**
- **AWS RDS** para la base de datos

## Comenzando

Para comenzar con este proyecto, sigue las instrucciones a continuación:

### Prerrequisitos

- Node.js (v16 o superior)
- npm (v8 o superior)

### Instalación

Para comenzar con la aplicación, sigue estos pasos:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/anderson383/shoppingify-back

2. **Navigate to the project directory::**

   ```bash
   cd shoppingify-back
3. **Intall dependencies:**

   ```bash
   npm install
4. **Start the development server:**

   ```bash
   npm run start:dev
   run in port http://localhost:4000/
5. **Execute build:**
   ```bash
   npm run build
6. **Execute build:**
   ```bash
   npm run start:prod
## Production Server

This project is currently located at the following URL.

- **Railway server:**
  - [Shoppingify-back](https://shoppingify-back-production.up.railway.app/)
