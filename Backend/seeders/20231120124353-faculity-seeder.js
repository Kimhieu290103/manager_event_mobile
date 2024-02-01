"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        
        await queryInterface.bulkInsert(
            "Faculities",
            [
                {
                    name: "Công nghệ thông tin",
                },
                {
                    name: "Công nghệ thực phẩm",
                },
                {
                    name: "Xây dựng",
                },
                {
                    name: "Other",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Faculities", null, {});
    },
};
