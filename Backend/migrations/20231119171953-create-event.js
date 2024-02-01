"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Events", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
              type: Sequelize.TEXT,
            },
            slogan: {
                type: Sequelize.STRING,
            },
            date_start: {
                type: Sequelize.DATE,
            },
            date_end: {
                type: Sequelize.DATE,
            },
            location: {
                type: Sequelize.STRING,
            },
            status: {
                type : Sequelize.INTEGER,
            },
            image:{
              type : Sequelize.STRING,
            },
            createdBy:{
                type : Sequelize.INTEGER,
            },
            type_id : {    
                type : Sequelize.INTEGER,
            },
            isDeleted : {    
                type : Sequelize.BOOLEAN,
                defaultValue: false,
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
        await queryInterface.dropTable("Events");
    },
};