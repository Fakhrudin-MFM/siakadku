'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserGroup = sequelize.define('UserGroup', {
    hak_akses: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserGroup;
};