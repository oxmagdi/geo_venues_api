'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Locations', [{
      userId: 1,
      lat: 30.265,
      long: 31.2254,
      isBetaMember: false
    },{
      userId: 1,
      lat: 30.365,
      long: 31.4214,
      isBetaMember: false
    },{
      userId: 2,
      lat: 30.365,
      long: 31.4214,
      isBetaMember: false
    },{
      userId: 1,
      lat: 30.365,
      long: 31.4214,
      isBetaMember: false
    },{
      userId: 1,
      lat: 30.365,
      long: 31.4214,
      isBetaMember: false
    },{
      userId: 2,
      lat: 30.7565,
      long: 31.2214,
      isBetaMember: false
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Locations', null, {});
  }
};
