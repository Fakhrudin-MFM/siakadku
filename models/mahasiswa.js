'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mahasiswa = sequelize.define('Mahasiswa', {
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    npm: DataTypes.STRING,
    nama: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATEONLY,
    sex: {
      type:DataTypes.ENUM,
      values:['L','P']
    },
    tahun_masuk: DataTypes.INTEGER
  });

  Mahasiswa.associate = function(models) {
    // associations can be defined here
    Mahasiswa.belongsTo(models.JalurMasuk, {
      foreignKey: 'idJalurMasuk',
      onDelete : 'CASCADE',
    });

    Mahasiswa.belongsTo(models.ProgramStudi, {
      foreignKey: 'idProgramStudi',
      onDelete : 'CASCADE',
    });

    Mahasiswa.belongsTo(models.Dosen, {
      foreignKey: 'idDosen',
      onDelete : 'CASCADE',
    });
    
    Mahasiswa.belongsTo(models.User, {
      foreignKey: 'idUser',
      onDelete : 'CASCADE',
    });
  };
  
  return Mahasiswa;
};