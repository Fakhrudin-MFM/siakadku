'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type:DataTypes.STRING,
      unique:true
    },
    email:DataTypes.STRING,
    password: DataTypes.STRING,
    foto: DataTypes.STRING
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.UserGroup,{
      foreignKey: 'idUserGroup',
      onDelete : 'CASCADE',
    });
  };
  return User;
};