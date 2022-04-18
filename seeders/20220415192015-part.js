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
          horsePowerEffect: 2,
          brakingEffect: 0,
          handlingEffect: 1,
          price: 25,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Carbon Winged Spoiler',
          performance: true,
          weight: 10,
          image: 'https://www.spotdem.com/wp-content/uploads/2020/06/spoiler-1024x609.jpg',
          topSpeedEffect: 1,
          accelerationEffect: 0,
          horsePowerEffect: 0,
          brakingEffect: 0,
          handlingEffect: 2,
          price: 1500,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'AMT Stainless Steel Sports Muffler',
          performance: true,
          weight: 25,
          image: 'https://www.swedishcarparts.com/uploads/part_image/file_name/000/001/570/1570/ffcf1156.jpg',
          topSpeedEffect: 0,
          accelerationEffect: 0,
          horsePowerEffect: 3,
          brakingEffect: 0,
          handlingEffect: 0,
          price: 2000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Holographic Candy Wrap',
          performance: false,
          weight: 0,
          image: 'https://i.pinimg.com/originals/0c/6c/5e/0c6c5ec856e64b58d7b70738fc98ea29.jpg',
          topSpeedEffect: 0,
          accelerationEffect: 0,
          horsePowerEffect: 0,
          brakingEffect: 0,
          handlingEffect: 0,
          price: 15000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Formula 1 High Performance Tires Set (x4)',
          performance: true,
          weight: 88,
          image: 'https://s3-eu-west-1.amazonaws.com/crash.net/image_importer/F1/1523874273.jpg',
          topSpeedEffect: 4,
          accelerationEffect: 2,
          horsePowerEffect: 4,
          brakingEffect: 5,
          handlingEffect: 5,
          price: 10000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'AIRMEX Front Bumper Lip Chin Bumper Splitter Glossy Kit',
          performance: true,
          weight: 5,
          image: 'https://us-w1-img-listing.eccang.com/0/QjdTYW5WdzNIMmkyaEs1NThFaGdTdz09/202009/5064992TbWjMbXE.jpg',
          topSpeedEffect: 2,
          accelerationEffect: 2,
          horsePowerEffect: 0,
          brakingEffect: 0,
          handlingEffect: -1,
          price: 503,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pzero Performance Tires',
          performance: true,
          weight: 10,
          image: 'https://c2.staticflickr.com/2/1600/25893277392_8f16688923_b.jpg',
          topSpeedEffect: 0,
          accelerationEffect: 2,
          horsePowerEffect: 3,
          brakingEffect: 5,
          handlingEffect: 5,
          price: 5450,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: ' GoodYear BBS Magnesium Racing Rims',
          performance: false,
          weight: 10,
          image: 'https://static.carthrottle.com/workspace/uploads/posts/2017/12/0904c4dd186476687c8732dedb8ba8cc.jpg',
          topSpeedEffect: 0,
          accelerationEffect: 0,
          horsePowerEffect: 0,
          brakingEffect: 0,
          handlingEffect: 0,
          price: 1200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Japan JR Racing Rims 17',
          performance: true,
          weight: 20,
          image: 'https://www.jdmdistro.com/wp-content/uploads/2021/02/JR9178582074GD_22279_1.jpg',
          topSpeedEffect: 2,
          accelerationEffect: 1,
          horsePowerEffect: 0,
          brakingEffect: 0,
          handlingEffect: 0,
          price: 2500,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('parts', null, {})
  }
};
