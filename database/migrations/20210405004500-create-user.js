'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
        unique: true,
    },
    username: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    activated:{
             type: Sequelize.DataTypes.BOOLEAN,
             defaultValue: false
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};