'use strict';

const config = require('../Configs/app')
const cryptr = require('../Helpers/cryptr')

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
   
      await queryInterface.bulkInsert('Users', [{
        username: 'demo',
        username: 'demo@gmail.com',
        username: cryptr.encrypt('demo1234'),
        isBetaMember: false
      },{
        username: 'superduper',
        username: 'superduper@gmail.com',
        username: cryptr.encrypt('password'),
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
     
    await queryInterface.bulkDelete('Users', null, {});

  }
};
