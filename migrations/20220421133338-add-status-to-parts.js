'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('parts', 'status', {
      type: Sequelize.BOOLEAN
      })
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.removeColumn('parts', 'status')
  }
};
