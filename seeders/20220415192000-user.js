'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Carlon',
          lastName: 'Musk',
          username: 'TwitterBoi',
          email: 'therealcarlon@twitter.com',
          passwordDigest: 'examplepassword1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Ken',
          lastName: 'Miles',
          username: 'LeMansMan',
          email: 'kmiles@aol.com',
          passwordDigest: 'examplepassword2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Nikki',
          lastName: 'Lauda',
          username: 'nikki_lauda',
          email: 'nikki@gmail.com',
          passwordDigest: 'examplepassword3',
          updatedAt: new Date()
        },
        {
          firstName: 'James',
          lastName: 'Hunt',
          username: 'JHunt',
          email: 'Junt@yahoo.com',
          passwordDigest: 'examplepassword4',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Max',
          lastName: 'Verstappen',
          username: 'Verstappen',
          email: 'max_verstappen@outlook.com',
          passwordDigest: 'examplepassword5',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Lewis',
          lastName: 'Hamilton',
          username: 'lewis_hammy',
          email: 'lewis_hamilton@yahoo.com',
          passwordDigest: 'examplepassword6',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Sergio',
          lastName: 'Perez',
          username: 'Don_Perez',
          email: 'sperez@gmail.com',
          passwordDigest: 'examplepassword7',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Ricky',
          lastName: 'Bobby',
          username: 'IWannaGoFast',
          email: 'number1rickybobby@yahoo.com',
          passwordDigest: 'examplepassword7',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
