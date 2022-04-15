'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'cars',
      // [
      //   {
      //     make: 'Porsche',
      //     model: 'Carrera GT',
      //     year: 2004,
      //     bodyType: 'Sport',
        //   color: 'Silver',
        //   image: 'https://ag-spots-2018.o.auroraobjects.eu/2018/01/04/porsche-carrera-gt-c785004012018193537_1.jpg?1611299548',
        //   horsePower: 605,
        //   topSpeed: 205,
        //   acceleration: 3.5,
        //   weight: ,
        //   price:
        // },
        // {
        //   make: '',
        //   model: '',
        //   year: ,
        //   bodyType: '',
        //   color: '',
        //   image: '',
        //   horsePower: ,
        //   topSpeed: ,
        //   acceleration: ,
        //   weight: ,
        //   price:
        // },
        // {
        //   make: '',
        //   model: '',
        //   year: ,
        //   bodyType: '',
        //   color: '',
        //   image: '',
        //   horsePower: ,
        //   topSpeed: ,
        //   acceleration: ,
        //   weight: ,
        //   price:
        // },
        // {
        //   make: '',
        //   model: '',
        //   year: ,
        //   bodyType: '',
        //   color: '',
        //   image: '',
        //   horsePower: ,
        //   topSpeed: ,
        //   acceleration: ,
        //   weight: ,
        //   price:
        // },
        // {
        //   make: '',
        //   model: '',
        //   year: ,
        //   bodyType: '',
        //   color: '',
        //   image: '',
        //   horsePower: ,
        //   topSpeed: ,
        //   acceleration: ,
        //   weight: ,
        //   price:
        // },
        // {
        //   make: '',
        //   model: '',
        //   year: ,
        //   bodyType: '',
        //   color: '',
        //   image: '',
        //   horsePower: ,
        //   topSpeed: ,
        //   acceleration: ,
        //   weight: ,
        //   price:
        // }
      // ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
