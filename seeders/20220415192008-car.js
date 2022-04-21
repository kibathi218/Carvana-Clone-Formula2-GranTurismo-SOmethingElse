'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'cars',
      [
        {
          make: 'Porsche',
          model: 'Carrera GT',
          year: 2004,
          bodyType: 'Sport',
          color: 'Silver',
          image: 'https://ag-spots-2018.o.auroraobjects.eu/2018/01/04/porsche-carrera-gt-c785004012018193537_1.jpg?1611299548',
          horsePower: 605,
          topSpeed: 205,
          acceleration: 3.5,
          weight: 3146,
          price: 448400,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Subaru',
          model: 'WRX GR.B Rally Car',
          year: 2015,
          bodyType: 'Coup',
          color: 'Blue',
          image: 'https://www.gtplanet.net/wp-content/uploads/2018/05/28318391479_f7603078f3_k-860x484.jpg',
          horsePower: 271,
          topSpeed: 170,
          acceleration: 5.6,
          weight: 3450,
          price: 36335,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Pangani',
          model: 'Huayra',
          year: 2013,
          bodyType: 'Coup Sport',
          color: 'White with Red Detail',
          image: 'https://ag-spots-2019.o.auroraobjects.eu/2019/10/13/other/2880-1800-crop-pagani-huayra-lampo-c605313102019192400_1.jpg',
          horsePower: 386,
          topSpeed: 238,
          acceleration: 2.8,
          weight: 2699,
          price: 3100000,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Dallara',
          model: 'SF19 Super Formula',
          year: 2019,
          bodyType: 'Sport Performance',
          color: 'Gold',
          image: 'https://abload.de/img/1g4k7e.jpg',
          horsePower: 639,
          topSpeed: 190,
          acceleration: 3.25,
          weight: 1455,
          price: 2100000,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Bugatti',
          model: 'Veyron',
          year: 2013,
          bodyType: 'Sport Roadster',
          color: 'Blue',
          image: 'https://ag-spots-2019.o.auroraobjects.eu/2019/09/13/bugatti-veyron-164-super-sport-le-saphir-bleu-c635513092019140506_1.jpg',
          horsePower: 986,
          topSpeed: 253,
          acceleration: 2.5,
          weight: 4160,
          price: 2250880,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Dodge',
          model: 'Viper',
          year: 2002,
          bodyType: 'Sport Coup',
          color: 'Blue with White Detail',
          image: 'https://ag-spots-2020.o.auroraobjects.eu/2020/09/20/dodge-viper-gts-c426420092020185513_1.jpg?1608414748',
          horsePower: 444,
          topSpeed: 185,
          acceleration: 4.4,
          weight: 3460,
          price: 75225,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cars', null, {})
  }
};
