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
      return queryInterface.bulkInsert('ProgramStudis', [{
        id:7530,
        nama_prodi: 'Manajemen Informatika',
        akreditasi: 'B',
        tanggal_berdiri: '2000-10-09',
        nosk_pendirian: '12345',
        email: 'mi@polinela.ac.id'
      },{
        id:7510,
        nama_prodi: 'Agribisnis',
        akreditasi: 'B',
        tanggal_berdiri: '2000-10-09',
        nosk_pendirian: '12345',
        email: 'agri@polinela.ac.id'        
      },{
        id:7520,
        nama_prodi: 'Akuntansi',
        akreditasi: 'B',
        tanggal_berdiri: '2000-10-09',
        nosk_pendirian: '12345',
        email: 'akun@polinela.ac.id'                
      },{
        id:7540,
        nama_prodi: 'Agribisnis Pangan',
        akreditasi: 'B',
        tanggal_berdiri: '2000-10-09',
        nosk_pendirian: '12345',
        email: 'agripangan@polinela.ac.id'                
      },{
        id:7550,
        nama_prodi: 'Akuntansi Perpajakan',
        akreditasi: 'B',
        tanggal_berdiri: '2000-10-09',
        nosk_pendirian: '12345',
        email: 'akunpajak@polinela.ac.id'                
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
      //return queryInterface.bulkDelete('ProgramStudis', null, {});    
  }
};
