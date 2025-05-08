# DAWA-S6.3

# Traductor Quechua

Esta es una aplicación que permite traducir textos del idioma quechua.

## Requisitos previos

* Node.js instalado en el sistema
* MySQL Server instalado en el sistema
* crear una base de datos llamada `traductor_quechua` creada en el MySQL Server, sigue los siguientes pasos:

1. Abre la línea de comandos de MySQL Server: `mysql -u tu_usuario -p`
2. Ingresa tu contraseña de MySQL.
3. Crea la base de datos `traductor_quechua`: `CREATE DATABASE traductor_quechua;`
4. Verifica que la base de datos se haya creado correctamente: `SHOW DATABASES;`
5. Salir de la línea de comandos de MySQL Server: `EXIT;`

## Instalación

1. Clonar el repositorio de GitHub
2. Ejecutar el comando `npm install` para instalar las dependencias
3. Ejecutar el comando `npx sequelize-cli db:migrate` para migrar los modelos de datos a la base de datos
4. Iniciar la aplicación con el comando `npm start`

## Configuración de la base de datos

La aplicación utiliza un archivo `.env` para almacenar las credenciales de la base de datos. Debes crear un archivo `.env` en el directorio raíz del proyecto con el siguiente contenido:
```makefile
DB_NAME=traductor_quechua
DB_USER=tu_root
DB_PASSWORD=tu_password
DB_HOST=localhost
DB_DIALECT=mysql
