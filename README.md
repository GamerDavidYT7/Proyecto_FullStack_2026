# Moobilia

## Integrante

- Omar David Rivera Martínez

---

# Descripción del proyecto

Moobilia es una tienda virtual especializada en la comercialización de muebles para el hogar y la oficina.

La plataforma permite a los usuarios consultar un catálogo de productos, visualizar información detallada, enviar mensajes mediante un formulario de contacto y navegar entre diferentes secciones de la tienda.

Además, cuenta con un panel administrativo protegido mediante autenticación, desde el cual se pueden gestionar los productos utilizando operaciones CRUD (Crear, Consultar, Actualizar y Eliminar).

---

# Objetivo del proyecto

Desarrollar una tienda virtual funcional que integre frontend, backend y base de datos, aplicando los conocimientos adquiridos durante el programa Técnico en Programación de Software.

---

# Tecnologías utilizadas

## Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript

## Backend

- Node.js
- Express.js

## Base de Datos

- MySQL

## Control de Versiones

- Git
- GitHub

---

# Características de la tienda

### Nombre de la tienda

Moobilia

### Tipo de negocio

Tienda virtual de muebles para hogar y oficina.

### Identidad visual

- Fondo: Crema claro
- Textos: Marrón oscuro
- Botones: Mostaza
- Diseño responsivo mediante Bootstrap

---

# Estructura del proyecto

```text
Proyecto_FullStack_2026/

├── backend/
│
├── server.js
├── package.json
├── package-lock.json
│
├── frontend/
│
├── index.html
├── productos.html
├── ayuda.html
├── contacto.html
├── login.html
├── admin-productos.html
│
├── css/
│ └── estilos.css
│
├── js/
│ ├── script.js
│ ├── productos.js
│ ├── login.js
│ └── auth.js
│
├── img/
│
├──video/
│
├── .gitattributes
│
├── .gitignore
│
├── AGENTS.md
│
├── Documentacion.pdf
│
├── README.md
│
└── README_TALLER_FULL_STACK_2026.md
```

---

# Ejecución del proyecto

## 1. Iniciar MySQL

Verificar que el servicio de MySQL se encuentre activo.

## 2. Ejecutar el backend

Ubicarse en la carpeta backend, con el comando `cd backend` y ejecutar:

```bash
node server.js
```

## 3. Ejecutar el frontend

Abrir el proyecto mediante Live Server desde Visual Studio Code.

## 4. Acceder a la aplicación

Ingresar a:

```text
index.html
```

y navegar por las diferentes secciones de la tienda.

---

# Funcionalidades implementadas

## Navegación

- Página principal.
- Catálogo de productos.
- Página de ayuda.
- Página de contacto.
- Login administrativo.
- Panel administrativo.

## Gestión de productos

- Crear productos.
- Consultar productos.
- Editar productos.
- Eliminar productos.

## Autenticación

- Inicio de sesión.
- Validación de credenciales.
- Protección del panel administrativo.
- Cierre de sesión.

## Base de datos

- Almacenamiento de productos.
- Almacenamiento de usuarios.
- Almacenamiento de mensajes de contacto.

---

# Flujo de información

```text
Usuario
   ↓
Frontend (HTML + CSS + Bootstrap)
   ↓
JavaScript
   ↓
Fetch API
   ↓
Backend (Node.js + Express)
   ↓
Base de Datos MySQL
   ↓
Respuesta del servidor
   ↓
Visualización en el Frontend
```

---

# Validaciones realizadas

### Productos

- Registro de productos.
- Consulta de productos.
- Actualización de productos.
- Eliminación de productos.

### Login

- Inicio de sesión correcto.
- Validación de credenciales.
- Cierre de sesión.

### Seguridad

- Restricción de acceso al panel administrativo.
- Redirección automática al login cuando no existe sesión activa.

### Contacto

- Registro de mensajes enviados por los usuarios.
- Almacenamiento de información en la base de datos.

---

# Aprendizajes obtenidos

Durante el desarrollo de Moobilia se fortalecieron conocimientos relacionados con:

- Desarrollo Frontend.
- Diseño responsivo con Bootstrap.
- Manipulación del DOM con JavaScript.
- Consumo de APIs mediante Fetch.
- Desarrollo Backend con Node.js y Express.
- Conexión y consultas a MySQL.
- Implementación de operaciones CRUD.
- Autenticación y protección de rutas.
- Control de versiones mediante Git y GitHub.

---

# Repositorio GitHub

https://github.com/GamerDavidYT7/Proyecto_FullStack_2026

---

# Video de sustentación

https://vimeo.com/1204361917?share=copy&fl=sv&fe=ci

---

# Autor

Omar David Rivera Martínez

3336014

Técnico en Programación de Software

Servicio Nacional de Aprendizaje - SENA
