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
    const names = [
      "Ahmad",
      "Budi",
      "Charlie",
      "Charlie",
      "Charlie lagi tapi namanya super panjang banget ya oloh ini ga berhenti",
      "Daniel",
      "Edgar",
      "Fabio",
      "Gerald",
      "Hudson",
      "Ignatius",
      "Jonathan",
      "Kelvin",
      "Loius",
      "Mario",
      "Noah",
    ]

    const dummy = names.map((name, i) => ({
        nama: name,
        tanggalLahir: i+1 < 10 ? `1990-01-0${i + 1}` : `1990-01-${i + 1}`,
        ktp: `0000000000${i}`,
        noPasien: `BPJS-000${i}`,
        alamat: "alamat rumah " + i,
        patientTypeId: (i%4) + 1,
        alergi: "",
        hp: "08888888888888",
        gender: i%2,
    }))

    await queryInterface.bulkInsert('patients', dummy, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('patients', null, {});
  }
};
