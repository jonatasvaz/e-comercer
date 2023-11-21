const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Cadastro = sequelize.define("cadastro", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,  
  }
});

module.exports = Cadastro;