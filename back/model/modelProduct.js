const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Product = sequelize.define("product", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  price: {
    type: DataTypes.FLOAT,
    allowNull:null
  },
  category: {
    type: DataTypes.STRING,
 
  },
  description: {
    type: DataTypes.TEXT,
 
  },
  countInStock: {
    type: DataTypes.INTEGER,
 
  },
  Image: {
    type: DataTypes.STRING,
 
  }
});

module.exports = Product;

  