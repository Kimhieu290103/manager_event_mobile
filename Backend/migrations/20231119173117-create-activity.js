"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Activities", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            event_id: {
                type: Sequelize.INTEGER,
            },
            date_start: {
              type: Sequelize.DATE,
            },
            date_end: {
                type: Sequelize.DATE,
            },
            content: {
              type: Sequelize.STRING,
            },
            status: {
              type: Sequelize.STRING,
            },
            candidate_id: {
              type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW"),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Activities");
    },
};