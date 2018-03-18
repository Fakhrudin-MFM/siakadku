'use strict';
module.exports = (sequelize, DataTypes) => {
  var MataKuliah = sequelize.define('MataKuliah', {
    nama_matkul: DataTypes.STRING,
    sks: DataTypes.INTEGER
  });

  MataKuliah.associate = function(models) {
    // associations can be defined here
    MataKuliah.belongsTo(models.ProgramStudi, {
      foreignKey:'idProgramStudi',
      onDelete:'CASCADE'
    });
  }
  return MataKuliah;
};