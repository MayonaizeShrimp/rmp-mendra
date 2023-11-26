'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientStatus.hasMany(models.Patient, {
        foreignKey: "TipePasienId"
      });
    }
  }
  PatientStatus.init({
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PatientStatus',
  });
  return PatientStatus;
};