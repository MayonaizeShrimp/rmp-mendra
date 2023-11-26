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
      TinggiBadan: {
        type: Sequelize.INTEGER
      },
      BeratBadan: {
        type: Sequelize.INTEGER
      },
      LingkarPerut: {
        type: Sequelize.INTEGER
      },
      Sistol: {
        type: Sequelize.INTEGER
      },
      Diastol: {
        type: Sequelize.INTEGER
      },
      Keluhan: {
        type: Sequelize.STRING
      },
      Dx: {
        type: Sequelize.STRING
      },
      HasilLab: {
        type: Sequelize.STRING
      },
      PatientId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Patients",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Records');
  }
};