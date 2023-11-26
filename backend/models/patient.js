'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.PatientStatus)
    }
  }
  Patient.init({
    Nama: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nama must not empty"
        },
        notNull: {
          args: true,
          msg: "Nama must not empty"
        }
      }
    },
    TanggalLahir: DataTypes.DATE,
    Umur: DataTypes.INTEGER,
    KTP: DataTypes.STRING,
    NoPasien: DataTypes.STRING,
    Alamat: DataTypes.STRING,
    TipePasienId:{
      type: DataTypes.INTEGER,
      references: {
        model: PatientStatus,
        key: "id"
      }
    },
    Alergi: DataTypes.JSON,
    NoHp: DataTypes.STRING,
    JenisKelamin: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Patient',
  });

  Patient.beforeCreate((patient, option) => {
  const currentDate = new Date();
  const birthDate = new Date(patient.DateOfBirth);

  const age = currentDate.getFullYear() - birthDate.getFullYear();

  if(
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
  ){
    patient.age = age - 1;
  }
  else{
    patient.age = age;
  }
  
  })

  return Patient;
};