'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name must not empty"
          },
          notNull: {
            args: true,
            msg: "Name must not empty"
          }
        }
      },
      tanggalLahir: {
        type: Sequelize.DATE,
        validate: {
          notEmpty: {
            args: true,
            msg: "Tanggal Lahir must not empty"
          },
          notNull: {
            args: true,
            msg: "Tanggal Lahir must not empty"
          }
        }
      },
      ktp: {
        type: Sequelize.STRING
      },
      noPasien: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      patientTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "patient-types",
          key: "id"
        }
      },
      alergi: {
        type: Sequelize.STRING
      },
      hp: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('patients');
  }
};