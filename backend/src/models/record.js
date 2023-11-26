'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Record.init({
    TinggiBadan: DataTypes.INTEGER,
    BeratBadan: DataTypes.INTEGER,
    LingkarPerut: DataTypes.INTEGER,
    ThreadStarter: DataTypes.INTEGER,
    Sistol: DataTypes.INTEGER,
    Diastol:DataTypes.INTEGER,
    Keluhan: DataTypes.STRING,
    Dx: DataTypes.STRING,
    HasilLab: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};