'use strict';
module.exports = (sequelize, DataTypes) => {
  var JalurMasuk = sequelize.define('JalurMasuk', {
    nama_jalurmasuk: DataTypes.STRING,
  }, {
    timestamps:false
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JalurMasuk;
};