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
        },
        {
          make: 'Shelby',
          model: '427 Cobra',
          year: 1967,
          bodyType: 'Performance Roadster',
          color: 'Silver',
          image: 'https://assets.newatlas.com/dims4/default/81e46b9/2147483647/strip/true/crop/1667x1111+154+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Flimited-edition-50th-anniversary-shelby-427-cobra.jpg',
          horsePower: 360,
          topSpeed: 160,
          acceleration: 3.4,
          weight: 2355,
          price: 1500000,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Ford',
          model: 'GT40 Mk II',
          year: 1966,
          bodyType: 'Performance Coup',
          color: 'Black with Silver Trim',
          image: 'https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2015/01/005_1966_GT40.jpg',
          horsePower: 485,
          topSpeed: 205,
          acceleration: 3.7,
          weight: 2450,
          price: 1200000,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Ford',
          model: 'GT',
          year: 2018,
          bodyType: 'Performance Coup',
          color: 'White With Black Trim',
          image: 'https://2p2bboli8d61fqhjiqzb8p1a-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/2022-Ford-GT-64-Heritage-Edition_04-1140x570.jpg',
          horsePower: 647,
          topSpeed: 217,
          acceleration: 2.9,
          weight: 3047,
          price: 450000,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Aston Martin',
          model: 'Vanquish S',
          year: 2019,
          bodyType: 'Sport Coup',
          color: 'Silver',
          image: 'https://www.carscoops.com/wp-content/uploads/2022/01/Aston-Martin-Vanquish-1.jpg',
          horsePower: 580,
          topSpeed: 200,
          acceleration: 4.5,
          weight: 3834,
          price: 386500,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Ferrari',
          model: '488 Pista',
          year: 2020,
          bodyType: 'Sport Coup',
          color: 'Red',
          image: 'https://cdn.shopify.com/s/files/1/2784/4966/products/1_5a6673dd-555b-4223-a2fc-d169f45adae5_4000x2677_crop_center.jpg?v=1601655464',
          horsePower: 711,
          topSpeed: 211,
          acceleration: 2.85,
          weight: 3054,
          price: 330000,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Ferrari',
          model: '812 Superfast',
          year: 2020,
          bodyType: 'Sport Coup',
          color: 'Red',
          image: 'https://cdn.jdpower.com/Models/400x200/2020-Ferrari-812Superfast-Base.jpg',
          horsePower: 788,
          topSpeed: 211,
          acceleration: 3.1,
          weight: 3593,
          price: 311000,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'BMW',
          model: 'i8',
          year: 2020,
          bodyType: 'Sport Coup',
          color: 'Silver',
          image: 'https://hips.hearstapps.com/hmg-prod/images/2018-bmw-i8-roadster-120-1524840798.jpg?crop=0.723xw:0.890xh;0.237xw,0.0759xh&resize=640:*',
          horsePower: 369,
          topSpeed: 155,
          acceleration: 6.8,
          weight: 3501,
          price: 147500,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Audi',
          model: 'R8',
          year: 2022,
          bodyType: 'Sport Coupe',
          color: 'Red',
          image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-r8-004-1639950563.jpg?crop=0.667xw:0.500xh;0.0737xw,0.341xh&resize=1200:*',
          horsePower: 562,
          topSpeed: 204,
          acceleration: 3.7,
          weight: 3594,
          price: 148700,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'McLaren',
          model: '720 S',
          year: 2022,
          bodyType: 'Sport Coupe',
          color: 'Orange',
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg',
          horsePower: 710,
          topSpeed: 212,
          acceleration: 2.9,
          weight: 3139,
          price: 299000,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Rolls-Royce',
          model: 'Phantom',
          year: 2022,
          bodyType: 'Luxury Sedan',
          color: 'White With Black Trim',
          image: 'https://media.autoexpress.co.uk/image/private/s--6kF7XivS--/f_auto,t_content-image-full-mobile@1/v1563183348/autoexpress/2017/10/1_2.jpg',
          horsePower: 563,
          topSpeed: 155,
          acceleration: 5.7,
          weight: 5754,
          price: 465000,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Lamborghini',
          model: 'Huracan Evo',
          year: 2020,
          bodyType: 'Sport Coupe',
          color: 'Orange',
          image: 'https://cdn.motor1.com/images/mgl/JYbWM/s1/lamborghini-huracan-evo-feature.jpg',
          horsePower: 630,
          topSpeed: 202,
          acceleration: 3.4,
          weight: 3645,
          price: 312269,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Lamborghini',
          model: 'Murcielago',
          year: 2010,
          bodyType: 'Sport Coupe',
          color: 'Yellow',
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg',
          horsePower: 661,
          topSpeed: 212,
          acceleration: 3.4,
          weight: 3450,
          price: 122766,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Porsche',
          model: '911 GT3',
          year: 2022,
          bodyType: 'Sport Coupe',
          color: 'Black',
          image: 'https://www.motortrend.com/uploads/sites/5/2020/11/2022-Porsche-911-GT3-1.jpg',
          horsePower: 502,
          topSpeed: 199,
          acceleration: 3.2,
          weight: 3164,
          price: 161100,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Bentley',
          model: 'Continental GT',
          year: 2022,
          bodyType: 'Luxury Coupe',
          color: 'White',
          image: 'https://www.exclusiveautomotivegroup.com/galleria_images/2864/2864_main_l.jpg',
          horsePower: 650,
          topSpeed: 208,
          acceleration: 3.5,
          weight: 4773,
          price: 274900,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cars', null, {})
  }
};
