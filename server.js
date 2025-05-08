require('dotenv').config();
const express = require('express');
const path = require('path');
const traduccionesRouter = require('./routes/traducciones');


const {Sequelize} = require('sequelize');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', traduccionesRouter);


const sequelize = new Sequelize('traductor_quechua', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
sequelize.authenticate()
.then(() => {
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Servidor en http://localhost:${process.env.PORT || 3000}`)
    );
    console.log('MySQL conectado con Sequelize');
  })
  .catch(err => console.error('Error de conexión:', err));
