'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dosen = sequelize.define('Dosen', {
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    nidn: DataTypes.STRING,
    nama: DataTypes.STRING,
    gelar: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATEONLY,
    sex: {
      type:DataTypes.ENUM,
      values:['L','P']
    },
    tahun_masuk: DataTypes.INTEGER
  });

  Dosen.associate = function(models) {
    // associations can be defined here
    Dosen.belongsTo(models.ProgramStudi,{
      foreignKey: 'idProgramStudi',
      onDelete : 'CASCADE',
    });
    Dosen.belongsTo(models.Pendidikan,{
      foreignKey: 'idPendidikan',
      onDelete : 'CASCADE',
    });
    Dosen.belongsTo(models.user,{
      foreignKey: 'idUser',
      onDelete : 'CASCADE',
    });
  };
  return Dosen;
};