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
      Car.belongsTo(models.User, { foreignKey:'ownerId' })
      Car.hasMany(models.Part, { foreignKey: 'carId' })
    }
  }
  Car.init({
    ownerId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    bodyType: DataTypes.STRING,
    color: DataTypes.STRING,
    image: DataTypes.STRING,
    topSpeed: DataTypes.INTEGER,
    acceleration: DataTypes.REAL,
    horsePower: DataTypes.INTEGER,
    braking: DataTypes.INTEGER,
    handling: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Car',
    tableName: 'cars'
  });
  return Car;
};