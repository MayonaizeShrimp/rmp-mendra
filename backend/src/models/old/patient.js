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
      Patient.belongsTo(models.PatientType, {
        foreignKey: "TipePasienId"
      })
      Patient.hasOne(models.Record, {
        foreignKey: "PatientId"
      })
    }
  }
  Patient.init({
    Nama: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nama cannot be empty"
        },
        notNull: {
          args: true,
          msg: "Nama cannot be empty"
        }
      }
    },
    TanggalLahir: DataTypes.DATE,
    KTP: DataTypes.STRING,
    NoPasien: DataTypes.STRING,
    Alamat: DataTypes.STRING,
    TipePasienId:{
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          args: true,
          msg: "TipePasienId cannot be empty"
        }
      },
      references: {
        model: PatientStatus,
        key: "id"
      }
    },
    Alergi: DataTypes.STRING,
    NoHP: DataTypes.STRING,
    JenisKelamin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Patient',
  });

  return Patient;
};