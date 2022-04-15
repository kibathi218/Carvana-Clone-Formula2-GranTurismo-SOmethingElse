'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Part extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Part.init({
    name: DataTypes.STRING,
    type: DataTypes.BOOLEAN,
    ownerId: DataTypes.INTEGER,
    carId: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    image: DataTypes.STRING,
    topSpeedEffect: DataTypes.INTEGER,
    accelerationEffect: DataTypes.INTEGER,
    horsePowerEffect: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Part',
  });
  return Part;
};