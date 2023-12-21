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
            msg: "nama tidak boleh kosong"
          },
          notNull: {
            args: true,
            msg: "nama tidak boleh kosong"
          }
        }
      },
      tanggalLahir: {
        type: Sequelize.DATE,
        validate: {
          notEmpty: {
            args: true,
            msg: "tanggal lahir tidak boleh kosong"
          },
          notNull: {
            args: true,
            msg: "tanggal lahir tidak boleh kosong"
          }
        }
      },
      ktp: {
        type: Sequelize.STRING
      },
      noPasien: {
        type: Sequelize.STRING,
        unique: true,
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
    await queryInterface.dropTable('patients');
  }
};