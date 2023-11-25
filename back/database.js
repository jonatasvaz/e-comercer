const { Sequelize } = require('sequelize');


  const sequelize = new Sequelize('user', 'root', 'mypassword', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
  
  try {
    sequelize.authenticate();
    console.log('Conexão bem sucedida.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
  
  
  
  sequelize.sync().then(() => {
    console.log('Cadastro table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });

module.exports = sequelize