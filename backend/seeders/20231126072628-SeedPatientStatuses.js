'use strict';

const statuses = [
  {
    name: "BPJS",
  },
  {
    name: "UMUM"
  },
  {
    name: "BI Aktif"
  },
  {
    name: "BI Pensiun"
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
    await queryInterface.bulkInsert('PatientStatuses', statuses, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('PatientStatuses', null, {});
  }
};
