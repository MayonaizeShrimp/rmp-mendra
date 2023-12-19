'use strict';

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

    const total_patient = 4;
    const total_entries = 4;

    const dummy = [];
    for (let patient_id = 1; patient_id <= total_patient; patient_id++) {
      for (let entry = 0; entry < total_entries; entry++){
        const sample = 150 + entry + patient_id;
        const temp = {
          tinggiBadan: sample,
          beratBadan: sample,
          lingkarPerut: sample,
          sistole: sample,
          diastole: sample,
          keluhan: "sample keluhan nomor " + entry,
          icd10: "sample icd 10 nomor " + entry,
          dxPrimer: "sample dxPrimer nomor " + entry,
          terapi: "sample terapi nomor " + entry,
          hasilLab: "sample hasilLab nomor " + entry,
          patientId: patient_id,
        }
        dummy.push(temp);
      }
    }
    
    await queryInterface.bulkInsert('records', dummy, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('records', null, {});
  }
};
