'use strict';
module.exports = (sequelize, DataTypes) => {
  var Jurusan = sequelize.define('Jurusan', {
    nama_jurusan: DataTypes.STRING,
    tanggal_berdiri: DataTypes.DATEONLY,
    nosk_pendirian: DataTypes.STRING,
    akreditasi: {
      type:DataTypes.ENUM,
      values:['A','B','C']
    },
    email:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Jurusan;
};