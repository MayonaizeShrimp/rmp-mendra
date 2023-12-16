'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      tinggiBadan: {
        type: Sequelize.INTEGER
      },
      beratBadan: {
        type: Sequelize.INTEGER
      },
      lingkarPerut: {
        type: Sequelize.INTEGER
      },
      sistole: {
        type: Sequelize.INTEGER
      },
      diastole: {
        type: Sequelize.INTEGER
      },
      keluhan: {
        type: Sequelize.STRING
      },
      dxPrimer: {
        type: Sequelize.STRING
      },
      hasilLab: {
        type: Sequelize.STRING
      },
      patientId: {
        type: Sequelize.INTEGER,
        references: {
          model: "patients",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('records');
  }
};