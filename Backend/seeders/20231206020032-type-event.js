"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "TypeEvents",
            [
                {
                  type : "Fundraising",
                },
                {
                  type : "Social",
                },
                {
                  type : "Virtual",
                },
                {
                  type : "Festivals",
                },
                {
                  type : "Community",
                },
                {
                  type : "Pop-up",
                },
                {
                  type : "Other",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("TypeEvents", null, {});
    },
};
