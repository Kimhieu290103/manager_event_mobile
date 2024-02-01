"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "NotificationDetails",
            [
                {
                    noti_id : 1,
                    user_id : 1,
                },
                {
                    noti_id : 2,
                    user_id : 1,
                },
                {
                    noti_id : 3,
                    user_id : 1,
                },
                {
                    noti_id : 4,
                    user_id : 1,
                },
                {
                    noti_id : 5,
                    user_id : 1,
                },
                {
                    noti_id : 6,
                    user_id : 1,
                },
                {
                    noti_id : 7,
                    user_id : 1,
                },
                {
                    noti_id : 8,
                    user_id : 1,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("NotificationDetails", null, {});
    },
};
