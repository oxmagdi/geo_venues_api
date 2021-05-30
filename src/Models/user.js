'use strict';
const {
  Sequelize,
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
  },
  uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
      allowNull: false,
      unique: true,
  },
  email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
  },
  username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false
      // allowNull defaults to true
  },
  activated:{
           type: DataTypes.BOOLEAN,
           defaultValue: false
  }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};