'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('cars', 'status', {
      type: Sequelize.BOOLEAN
      })
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.removeColumn('cars', 'status')
  }
};
