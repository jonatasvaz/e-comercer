const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const shoppingcart = sequelize.define("shoppingcart", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    product: {
      type: DataTypes.STRING,
      allowNull:null
    },
    descriptio: {
      type: DataTypes.STRING,
      allowNull:null
    },
    amaunt: {
      type: DataTypes.INTEGER,
      allowNull:null
    }, 
   
    price: {
      type: DataTypes.INTEGER, 
   
    }, 
  
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull:null
  }
},
{
  timestamps: false
}
);

module.exports = shoppingcart;