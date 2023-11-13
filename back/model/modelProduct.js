const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Product = sequelize.define("product", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name_: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  price: {
    type: DataTypes.FLOAT,
    allowNull:null
  },
  image: {
    type: DataTypes.STRING,
 
  },
  brand: {
    type: DataTypes.STRING,
 
  },
  category: {
    type: DataTypes.STRING,
 
  },
  countInStock: {
    type: DataTypes.INTEGER,
 
  },
  description: {
    type: DataTypes.TEXT,
 
  },
 
 
});

module.exports = Product;

  