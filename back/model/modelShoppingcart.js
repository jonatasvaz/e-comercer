const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const shoppingcart = sequelize.define("shoppingcart", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },  
    name_product: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  amauntstock: {
    type: DataTypes.INTEGER,
    allowNull:null
  },
 
  price: {
    type: DataTypes.INTEGER, 
 
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
 
  },
  countInStock: {
    type: DataTypes.INTEGER,
 
  }, 
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER ,
    allowNull: false,
  }
},
{
  timestamps: false
}
);

module.exports = shoppingcart;