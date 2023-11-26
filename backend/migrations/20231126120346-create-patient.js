'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nama: {
        type: Sequelize.STRING,
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
      TanggalLahir: {
        type: Sequelize.DATE,
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
      Umur: {
        type: Sequelize.INTEGER
      },
      KTP: {
        type: Sequelize.STRING
      },
      NoPasien: {
        type: Sequelize.STRING
      },
      Alamat: {
        type: Sequelize.STRING
      },
      TipePasienId: {
        type: Sequelize.INTEGER,
        references: {
          model: "PatientStatuses",
          key: "id"
        }
      },
      Alergi: {
        type: Sequelize.JSON
      },
      NoHp: {
        type: Sequelize.STRING
      },
      JenisKelamin: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Patients');
  }
};