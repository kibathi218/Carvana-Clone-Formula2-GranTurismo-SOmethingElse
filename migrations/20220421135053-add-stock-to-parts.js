'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('parts', 'stock', {
      type: Sequelize.INTEGER
      })
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.removeColumn('parts', 'stock')
  }
};
