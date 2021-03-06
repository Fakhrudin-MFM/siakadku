'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('JalurMasuks', [{
        nama_jalurmasuk:"BidikMisi"
      },{
        nama_jalurmasuk:"PMDK"
      },{
        nama_jalurmasuk:"UMPN"
      },{
        nama_jalurmasuk:"UMPN-Mandiri"
      },{
        nama_jalurmasuk:"PMKAB"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
