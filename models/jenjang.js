'use strict';
module.exports = (sequelize, DataTypes) => {
  var Jenjang = sequelize.define('Jenjang', {
    nama_jenjang: DataTypes.STRING,
  }, {
    timestamps:false
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Jenjang;
};