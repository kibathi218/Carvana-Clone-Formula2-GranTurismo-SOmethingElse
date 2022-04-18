'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'parts',
      [
        {
          name: 'AMT Sports Air Filter',
          performance: true,
          weight: 1,
          image: 'https://images-na.ssl-images-amazon.com/images/I/81NTICXqCLL.jpg',
          topSpeedEffect: 1,
          accelerationEffect: 2,
          horsePowerEffect: 20,
          brakingEffect: 0,
          handlingEffect: 1
          price: 25
        },
        {
          name: 'Carbon Winged Spoiler',
          performance: true,
          weight: 10,
          image: 'https://www.spotdem.com/wp-content/uploads/2020/06/spoiler-1024x609.jpg',
          topSpeedEffect: 1,
          accelerationEffect: 0,
          horsePowerEffect: 0,
          price: 1500
        },
        {
          name: 'AMT Stainless Steel Sports Muffler',
          performance: true,
          weight: 25,
          image: 'https://www.swedishcarparts.com/uploads/part_image/file_name/000/001/570/1570/ffcf1156.jpg',
          topSpeedEffect: 0,
          accelerationEffect: 0,
          horsePowerEffect: 30,
          price: 2000
        },
        {
          name: 'Holographic Candy Wrap',
          performance: false,
          weight: 0,
          image: 'https://i.pinimg.com/originals/0c/6c/5e/0c6c5ec856e64b58d7b70738fc98ea29.jpg',
          topSpeedEffect: 0,
          accelerationEffect: 0,
          horsePowerEffect: 0,
          price: 15000
        },
        {
          name: 'Formula 1 High Performance Tires Set (x4)',
          performance: true,
          weight: 88,
          image: 'https://s3-eu-west-1.amazonaws.com/crash.net/image_importer/F1/1523874273.jpg',
          topSpeedEffect: 4,
          accelerationEffect: 2,
          horsePowerEffect: 0,
          price:
        },
        {
          name: 'AIRMEX Front Bumper Lip Chin Bumper Splitter Glossy Kit',
          performance: true,
          weight: 5,
          image: 'https://us-w1-img-listing.eccang.com/0/QjdTYW5WdzNIMmkyaEs1NThFaGdTdz09/202009/5064992TbWjMbXE.jpg',
          topSpeedEffect: 2,
          accelerationEffect: 2,
          horsePowerEffect: 0,
          price: 503
        },
        {
          name: 'Pzero Performance Tires',
          performance: true,
          weight: 10,
          image: '',
          topSpeedEffect: ,
          accelerationEffect: ,
          horsePowerEffect: ,
          price:
        },
        {
          name: '',
          performance: ,
          weight: ,
          image: '',
          topSpeedEffect: ,
          accelerationEffect: ,
          horsePowerEffect: ,
          price:
        },
        {
          name: '',
          performance: ,
          weight: ,
          image: '',
          topSpeedEffect: ,
          accelerationEffect: ,
          horsePowerEffect: ,
          price:
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('parts', null, {})
  }
};
