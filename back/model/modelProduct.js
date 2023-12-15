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
    type: DataTypes.INTEGER,
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
  descriptio: {
    type: DataTypes.TEXT,
 
  }, 
  imageName: {
    type: DataTypes.TEXT,
 
  }, 
  imageUrl: {
    type: DataTypes.TEXT,
 
  }





},
{
  timestamps: false
}
);

module.exports = Product;

  