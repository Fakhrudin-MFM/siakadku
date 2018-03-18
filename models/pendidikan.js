'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pendidikan = sequelize.define('Pendidikan', {
    nama_pendidikan: DataTypes.STRING,
  }, {
    timestamps:false
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Pendidikan;
};