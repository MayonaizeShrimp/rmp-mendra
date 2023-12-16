'use strict';

const statuses = [
  {
    nama: "BPJS",
  },
  {
    nama: "UMUM"
  },
  {
    nama: "BI Aktif"
  },
  {
    nama: "BI Pensiun"
  },
]

statuses.map(status => {
  status.createdAt = new Date;
  status.updatedAt = new Date;
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('patient-types', statuses, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('patient-types', null, {});
  }
};
