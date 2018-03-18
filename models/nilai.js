'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nilai = sequelize.define('Nilai', {
    semester:DataTypes.INTEGER,
    nilai:DataTypes.INTEGER,
  });
  Nilai.associate = function(models) {
    // associations can be defined here
    Nilai.belongsTo(models.Mahasiswa,{
      foreignKey:'idMahasiswa',
        onDelete : 'CASCADE',     
    });
    Nilai.belongsTo(models.Dosen,{
      foreignKey:'idDosen',
        onDelete : 'CASCADE',     
    });
    Nilai.belongsTo(models.MataKuliah,{
      foreignKey:'idMataKuliah',
        onDelete : 'CASCADE',
    });
  };
  return Nilai;
};