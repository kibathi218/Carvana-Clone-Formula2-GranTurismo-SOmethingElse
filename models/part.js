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
      Part.belongsTo(models.Car, {foreignKey: 'carId'})
      Part.belongsTo(models.User, { foreignKey: 'ownerId'})
    }
  }
  Part.init({
    name: DataTypes.STRING,
    performance: DataTypes.BOOLEAN,
    ownerId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    carId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'cars',
        key: 'id'
      }
    },
    weight: DataTypes.INTEGER,
    image: DataTypes.STRING,
    topSpeedEffect: DataTypes.INTEGER,
    accelerationEffect: DataTypes.REAL,
    horsePowerEffect: DataTypes.INTEGER,
    brakingEffect: DataTypes.INTEGER,
    handlingEffect: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Part',
    tableName: 'parts'
  });
  return Part;
};