'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'John',
          lastName: 'Smith',
          username: 'johnnyboy',
          email: 'js@example.com',
          passwordDigest: 'examplepassword',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
