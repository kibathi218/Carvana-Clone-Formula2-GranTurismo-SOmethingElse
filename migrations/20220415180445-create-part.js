'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('parts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      performance: {
        type: Sequelize.BOOLEAN
      },
      ownerId: {
        type: Sequelize.INTEGER
      },
      carId: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      topSpeedEffect: {
        type: Sequelize.INTEGER
      },
      accelerationEffect: {
        type: Sequelize.REAL
      },
      horsePowerEffect: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('parts');
  }
};