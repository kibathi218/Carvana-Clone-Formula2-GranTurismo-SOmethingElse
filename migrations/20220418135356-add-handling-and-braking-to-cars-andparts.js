'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('cars', 'handling', {
      type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('cars', 'braking', {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('parts', 'handlingEffect', {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('parts', 'brakingEffect', {
        type: Sequelize.INTEGER
      })
    ]);
  },

  async down (queryInterface, Sequelize) {
   return Promise.all([
     queryInterface.removeColumn('cars', 'handling'),
     queryInterface.removeColumn('cars', 'braking'),
     queryInterface.removeColumn('parts', 'handlingEffect'),
     queryInterface.removeColumn('parts', 'brakingEffect'),
   ])
  }
};
