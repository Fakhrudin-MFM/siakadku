'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProgramStudi = sequelize.define('ProgramStudi', {
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,      
    },
    nama_prodi: DataTypes.STRING,
    akreditasi: {
      type:DataTypes.ENUM,
      values:['A','B','C']
    },
    tanggal_berdiri: DataTypes.DATEONLY,
    nosk_pendirian: DataTypes.STRING,
    email: DataTypes.STRING
  });

  ProgramStudi.associate = function(models) {
    // associations can be defined here
    ProgramStudi.belongsTo(models.Jenjang, {
      foreignKey: 'idJenjang',
      onDelete : 'CASCADE',
    });
    ProgramStudi.belongsTo(models.Jurusan, {
      foreignKey: 'idJurusan',
      onDelete : 'CASCADE',
    });
  };
  return ProgramStudi;
};