'use strict';

const UUIDV4 = require('uuid/v4');
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
      return queryInterface.bulkInsert('Dosens', [
        {id:UUIDV4(),nidn:"1020304001",nama:"Eko Win Kenali",gelar:"S.Kom.,M.Cs",tanggal_lahir:"1970-12-05",sex:"L",tahun_masuk:2006,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304002",nama:"Dewi Kania Widyawati",gelar:"S.Kom.,M.Kom",tanggal_lahir:"1975-03-20",sex:"P",tahun_masuk:2008,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304003",nama:"Zuriati",gelar:"S.Kom.,M.Kom",tanggal_lahir:"1974-12-13",sex:"P",tahun_masuk:2006,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304004",nama:"Henry Kurniawan",gelar:"S.Si.,M.Stat",tanggal_lahir:"1979-09-14",sex:"L",tahun_masuk:2008,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304005",nama:"Imam Asrowardi",gelar:"S.Kom.,M.Kom",tanggal_lahir:"1970-08-15",sex:"L",tahun_masuk:2006,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304006",nama:"Tri Sandhika Jaya",gelar:"S.Kom.,M.Kom",tanggal_lahir:"1975-06-29",sex:"L",tahun_masuk:2006,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304007",nama:"Eko Subyantoro",gelar:"S.Kom.,M.Kom",tanggal_lahir:"1977-08-14",sex:"L",tahun_masuk:2008,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304008",nama:"Rima Maulini",gelar:"S.Kom.,M.Kom",tanggal_lahir:"1977-11-13",sex:"P",tahun_masuk:2007,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304009",nama:"Halim Fathoni",gelar:"S.T.,M.Eng",tanggal_lahir:"1978-03-13",sex:"L",tahun_masuk:2010,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304010",nama:"Kurniawan Saputra",gelar:"S.Kom.,M.Kom",tanggal_lahir:"1970-06-12",sex:"L",tahun_masuk:2007,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304011",nama:"Dwirgo Sahlinal",gelar:"S.T.,M.Eng",tanggal_lahir:"1969-12-15",sex:"L",tahun_masuk:2009,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304012",nama:"Mochamad Yusman",gelar:"S.Kom.,M.Kom",tanggal_lahir:"1978-12-15",sex:"L",tahun_masuk:2010,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304013",nama:"Septafiansyah Dwi Putra",gelar:"S.T.,M.T",tanggal_lahir:"1980-06-13",sex:"L",tahun_masuk:2011,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020304014",nama:"Agiska Ria Supriyatna",gelar:"S.Kom.,M.Kom",tanggal_lahir:"1973-12-20",sex:"P",tahun_masuk:2010,idProgramStudi:7530,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305001",nama:"Anita Kusuma Dewi",gelar:"SE, M.Com Acc",tanggal_lahir:"2075-12-06",sex:"P",tahun_masuk:2008,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305002",nama:"Arif Makhsun",gelar:"SE, MS.Ak",tanggal_lahir:"1973-04-12",sex:"L",tahun_masuk:2008,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305003",nama:"Artie Arditha R",gelar:"SE, M.Sc, Akt",tanggal_lahir:"1974-05-20",sex:"L",tahun_masuk:2005,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305004",nama:"Damayanti",gelar:"SE, MM, Akt",tanggal_lahir:"1972-12-13",sex:"P",tahun_masuk:2007,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305005",nama:"Destia Pentiana",gelar:"SE, M.Si",tanggal_lahir:"1972-12-06",sex:"P",tahun_masuk:2005,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305005",nama:"Dian Nirmala Dewi",gelar:"SE, MS.Ak",tanggal_lahir:"1970-12-14",sex:"P",tahun_masuk:2005,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305006",nama:"Dian PS",gelar:"S.Pd, M.Si",tanggal_lahir:"1970-11-05",sex:"P",tahun_masuk:2008,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305007",nama:"Eksa Ridwansyah",gelar:"SE, M.Bus, Akt",tanggal_lahir:"1969-12-21",sex:"L",tahun_masuk:2007,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305009",nama:"Endang Asliana",gelar:"SE, M.Sc",tanggal_lahir:"1997-12-07",sex:"P",tahun_masuk:2008,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305010",nama:"Evi Yuniarti",gelar:"SE, M.Si",tanggal_lahir:"1970-12-05",sex:"P",tahun_masuk:2008,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305011",nama:"Irawan",gelar:"SE, M.Si",tanggal_lahir:"1970-12-06",sex:"L",tahun_masuk:2009,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305012",nama:"Lihan Rini Puspo W",gelar:"S.E, M.Si",tanggal_lahir:"1979-12-20",sex:"P",tahun_masuk:2009,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305014",nama:"Maryani",gelar:"SE, MM",tanggal_lahir:"1970-12-07",sex:"P",tahun_masuk:2010,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305015",nama:"Nurmala",gelar:"SE, MM, Akt",tanggal_lahir:"1970-12-07",sex:"P",tahun_masuk:2010,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305016",nama:"Refdi Akmal",gelar:"S.Pd,M.Pd",tanggal_lahir:"1970-12-07",sex:"L",tahun_masuk:2004,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305018",nama:"Rusmianto",gelar:"SE, M.Si",tanggal_lahir:"0000-00-00",sex:"L",tahun_masuk:2004,idProgramStudi:7520,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020306001",nama:"Damayanti",gelar:" S.E., M.M.,Ak.,CA",tanggal_lahir:"1970-12-06",sex:"P",tahun_masuk:2017,idProgramStudi:7550,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020306002",nama:"Nurmala",gelar:"S.E., M.M.,Ak.,CA",tanggal_lahir:"1970-12-06",sex:"P",tahun_masuk:2017,idProgramStudi:7550,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020306003",nama:"Anita Kusuma Dewi",gelar:"S.E.,M.Com., Acc",tanggal_lahir:"1976-12-06",sex:"P",tahun_masuk:2017,idProgramStudi:7550,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020306004",nama:"Rusmianto",gelar:"S.E.,M.Si ",tanggal_lahir:"1970-12-28",sex:"L",tahun_masuk:2017,idProgramStudi:7550,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305007",nama:"Eksa Ridwansyah",gelar:" S.E.,M.Buss.,Ak.CA ",tanggal_lahir:"1970-12-14",sex:"L",tahun_masuk:2017,idProgramStudi:7550,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305005",nama:"Destia Pentiana",gelar:"SE., M.Si ",tanggal_lahir:"1970-12-14",sex:"P",tahun_masuk:2017,idProgramStudi:7550,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020305014",nama:"Maryani",gelar:"S.E.,M.M.,Ak.CA",tanggal_lahir:"2017-12-14",sex:"P",tahun_masuk:2017,idProgramStudi:7550,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307001",nama:"Ir. Cholid Fatih",gelar:" M.P",tanggal_lahir:"1974-12-13",sex:"L",tahun_masuk:2008,idProgramStudi:7510,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307002",nama:"Ir. Bina Unteawati",gelar:" M.P",tanggal_lahir:"1973-05-10",sex:"P",tahun_masuk:2008,idProgramStudi:7510,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307003",nama:"Ir. Teguh Budi Trisnanto",gelar:" M.Si",tanggal_lahir:"1972-01-10",sex:"L",tahun_masuk:2008,idProgramStudi:7510,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307004",nama:"Sutarni",gelar:" S.P.,M.E.P",tanggal_lahir:"1975-09-11",sex:"P",tahun_masuk:2007,idProgramStudi:7510,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307005",nama:"Fitriani",gelar:" S.P., M.E.P",tanggal_lahir:"1976-04-14",sex:"P",tahun_masuk:2007,idProgramStudi:7510,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307006",nama:"Fadila Marga Saty",gelar:" S.Si., M.Si",tanggal_lahir:"1970-08-29",sex:"P",tahun_masuk:2006,idProgramStudi:7510,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307007",nama:"Muhammad Zaini",gelar:" S.P",tanggal_lahir:"1969-12-06",sex:"L",tahun_masuk:2007,idProgramStudi:7510,idPendidikan:1},
        {id:UUIDV4(),nidn:"1020307008",nama:"Analianasari",gelar:" S.T.P., M.T.A.",tanggal_lahir:"1973-04-20",sex:"P",tahun_masuk:2007,idProgramStudi:7510,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307009",nama:"Luluk Irawati",gelar:" S.P., M.T.A.",tanggal_lahir:"1972-05-05",sex:"P",tahun_masuk:2008,idProgramStudi:7510,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307010",nama:"Marlinda Apriyani",gelar:" S.P.,M.P.",tanggal_lahir:"1974-08-22",sex:"P",tahun_masuk:2008,idProgramStudi:7510,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307011",nama:"Sri Handayani",gelar:" S.P., M.E.P",tanggal_lahir:"1973-07-25",sex:"P",tahun_masuk:2008,idProgramStudi:7510,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307001",nama:"Ir. Cholid Fatih",gelar:" M.P",tanggal_lahir:"1974-12-13",sex:"L",tahun_masuk:2008,idProgramStudi:7540,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307002",nama:"Ir. Bina Unteawati",gelar:" M.P",tanggal_lahir:"1973-05-10",sex:"P",tahun_masuk:2008,idProgramStudi:7540,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307003",nama:"Ir. Teguh Budi Trisnanto",gelar:" M.Si",tanggal_lahir:"1972-01-10",sex:"L",tahun_masuk:2008,idProgramStudi:7540,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307004",nama:"Sutarni",gelar:" S.P.,M.E.P",tanggal_lahir:"1975-09-11",sex:"P",tahun_masuk:2007,idProgramStudi:7540,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307005",nama:"Fitriani",gelar:" S.P., M.E.P",tanggal_lahir:"1976-04-14",sex:"P",tahun_masuk:2007,idProgramStudi:7540,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307006",nama:"Fadila Marga Saty",gelar:" S.Si., M.Si",tanggal_lahir:"1970-08-29",sex:"P",tahun_masuk:2006,idProgramStudi:7540,idPendidikan:2},
        {id:UUIDV4(),nidn:"1020307007",nama:"Muhammad Zaini",gelar:" S.P",tanggal_lahir:"1969-12-06",sex:"L",tahun_masuk:2007,idProgramStudi:7540,idPendidikan:1},
        {id:UUIDV4(),nidn:"1020307008",nama:"Analianasari",gelar:" S.T.P., M.T.A.",tanggal_lahir:"1973-04-20",sex:"P",tahun_masuk:2007,idProgramStudi:7540,idPendidikan:2}
      ], {});
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
