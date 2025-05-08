'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Traduccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Traduccion.init({
    palabra: DataTypes.STRING,
    traduccion: DataTypes.STRING,
    pronunciacion: DataTypes.STRING,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Traduccion',
  });
  return Traduccion;
};