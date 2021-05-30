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

     await queryInterface.bulkInsert('Places', [{
      name: 'place one',
      lat: 33.462,
      long: -112.268,
      landArea: 6000,
      isBetaMember: false
    },{
      name: 'place two',
      lat: 30.365,
      long: 31.4214,
      landArea: 6000,
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
     await queryInterface.bulkDelete('Places', null, {});
  }
};
