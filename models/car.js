'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    ownerId: DataTypes.INTEGER,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    bodyType: DataTypes.STRING,
    color: DataTypes.STRING,
    image: DataTypes.STRING,
    topSpeed: DataTypes.INTEGER,
    acceleration: DataTypes.INTEGER,
    horsePower: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};