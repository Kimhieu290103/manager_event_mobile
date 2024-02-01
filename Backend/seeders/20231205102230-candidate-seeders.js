"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Candidates",
            [
                // Event_1
                {
                    department_id: 1,
                    user_id: 1,
                },
                // Event_1
                {
                    department_id: 2,
                    user_id: 2,
                },
                // Event_1
                {
                    department_id: 3,
                    user_id: 3,
                },
                // Event_1
                {
                    department_id: 1,
                    user_id: 4,
                },
                // Event_1
                {
                    department_id: 2,
                    user_id: 5,
                },
                  // Event_1
                  {
                    department_id: 1,
                    user_id: 6,
                },
                  // Event_1
                  {
                    department_id: 2,
                    user_id: 7,
                },
                  // Event_1
                  {
                    department_id: 3,
                    user_id: 8,
                },
                // Event_2
                {
                    department_id: 4,
                    user_id: 1,
                },
                // Event_2
                {
                    department_id: 4,
                    user_id: 2,
                },
                // Event_2
                {
                    department_id: 5,
                    user_id: 3,
                },
                // Event_2
                {
                    department_id: 5,
                    user_id: 4,
                },
                // Event_2
                {
                    department_id: 5,
                    user_id: 5,
                },
                // Event_2
                {
                    department_id: 6,
                    user_id: 6,
                },
                // Event_2
                {
                    department_id: 6,
                    user_id: 7,
                },
                // Event_2
                {
                    department_id: 6,
                    user_id: 8,
                },
                // Event_3
                {
                    department_id: 7,
                    user_id: 1,
                },
                // Event_3
                {
                    department_id: 7,
                    user_id: 2,
                },
                // Event_3
                {
                    department_id: 8,
                    user_id: 3,
                },
                // Event_3
                {
                    department_id: 8,
                    user_id: 4,
                },
                // Event_3
                {
                    department_id: 9,
                    user_id: 5,
                },
                // Event_3
                {
                    department_id: 9,
                    user_id: 6,
                },
                // Event_3
                {
                    department_id: 9,
                    user_id: 7,
                },
                // Event_3
                {
                    department_id: 7,
                    user_id: 8,
                },
                // Event_4
                {
                    department_id: 10,
                    user_id: 1,
                },
                 // Event_4
                 {
                    department_id: 10,
                    user_id: 2,
                },
                 // Event_4
                 {
                    department_id: 11,
                    user_id: 3,
                },
                 // Event_4
                 {
                    department_id: 11,
                    user_id: 4,
                },
                 // Event_4
                 {
                    department_id: 12,
                    user_id: 5,
                },
                 // Event_4
                 {
                    department_id: 12,
                    user_id: 6,
                },
                 // Event_4
                 {
                    department_id: 12,
                    user_id: 7,
                },
                 // Event_4
                 {
                    department_id: 11,
                    user_id: 8,
                },
                // Event_5
                {
                    department_id: 13,
                    user_id: 1,
                },
                // Event_5
                {
                    department_id: 14,
                    user_id: 2,
                },
                // Event_5
                {
                    department_id: 15,
                    user_id: 3,
                },
                // Event_5
                {
                    department_id: 15,
                    user_id: 4,
                },
                // Event_5
                {
                    department_id: 13,
                    user_id: 5,
                },
                // Event_5
                {
                    department_id: 14,
                    user_id: 6,
                },
                // Event_5
                {
                    department_id: 13,
                    user_id: 7,
                },
                // Event_5
                {
                    department_id: 15,
                    user_id: 8,
                },
                // Event_6
                {
                    department_id: 18,
                    user_id: 1,
                },
                // Event_6
                {
                    department_id: 17,
                    user_id: 2,
                },
                // Event_6
                {
                    department_id: 16,
                    user_id: 3,
                },
                // Event_6
                {
                    department_id: 17,
                    user_id: 4,
                },
                // Event_6
                {
                    department_id: 18,
                    user_id: 5,
                },
                // Event_6
                {
                    department_id: 17,
                    user_id: 6,
                },
                // Event_6
                {
                    department_id: 16,
                    user_id: 7,
                },
                // Event_6
                {
                    department_id: 18,
                    user_id: 8,
                },
                // Event_7
                {
                    department_id: 20,
                    user_id: 1,
                },
                // Event_7
                {
                    department_id: 19,
                    user_id: 2,
                },
                // Event_7
                {
                    department_id: 21,
                    user_id: 3,
                },
                // Event_7
                {
                    department_id: 19,
                    user_id: 4,
                },
                // Event_7
                {
                    department_id: 20,
                    user_id: 5,
                },
                // Event_7
                {
                    department_id: 21,
                    user_id: 6,
                },
                // Event_7
                {
                    department_id: 21,
                    user_id: 7,
                },
                // Event_7
                {
                    department_id: 19,
                    user_id: 8,
                },
                // Event_8
                {
                    department_id: 22,
                    user_id: 1,
                },
                // Event_8
                {
                    department_id: 24,
                    user_id: 2,
                },
                // Event_8
                {
                    department_id: 22,
                    user_id: 3,
                },
                // Event_8
                {
                    department_id: 23,
                    user_id: 4,
                },
                // Event_8
                {
                    department_id: 23,
                    user_id: 5,
                },
                // Event_8
                {
                    department_id: 24,
                    user_id: 6,
                },
                // Event_8
                {
                    department_id: 22,
                    user_id: 7,
                },
                // Event_8
                {
                    department_id: 23,
                    user_id: 8,
                },
                // Event_9
                {
                    department_id: 25,
                    user_id: 1,
                },
                // Event_9
                {
                    department_id: 27,
                    user_id: 2,
                },
                // Event_9
                {
                    department_id: 26,
                    user_id: 3,
                },
                // Event_9
                {
                    department_id: 26,
                    user_id: 4,
                },
                // Event_9
                {
                    department_id: 25,
                    user_id: 5,
                },
                // Event_9
                {
                    department_id: 27,
                    user_id: 6,
                },
                // Event_9
                {
                    department_id: 27,
                    user_id: 7,
                },
                // Event_9
                {
                    department_id: 26,
                    user_id: 8,
                },
                // Event_10
                {
                    department_id: 30,
                    user_id: 1,
                },
                // Event_10
                {
                    department_id: 28,
                    user_id: 2,
                },
                // Event_10
                {
                    department_id: 28,
                    user_id: 3,
                },
                // Event_10
                {
                    department_id: 28,
                    user_id: 4,
                },
                // Event_10
                {
                    department_id: 29,
                    user_id: 5,
                },
                // Event_10
                {
                    department_id: 29,
                    user_id: 6,
                },
                // Event_10
                {
                    department_id: 29,
                    user_id: 7,
                },
                // Event_10
                {
                    department_id: 30,
                    user_id: 8,
                },
                // Event_11
                {
                    department_id: 32,
                    user_id: 1,
                },
                // Event_11
                {
                    department_id: 32,
                    user_id: 2,
                },
                // Event_11
                {
                    department_id: 31,
                    user_id: 3,
                },
                // Event_11
                {
                    department_id: 31,
                    user_id: 4,
                },
                // Event_11
                {
                    department_id: 33,
                    user_id: 5,
                },
                // Event_11
                {
                    department_id: 33,
                    user_id: 6,
                },
                // Event_11
                {
                    department_id: 32,
                    user_id: 7,
                },
                // Event_11
                {
                    department_id: 31,
                    user_id: 8,
                },
                // Event_12
                {
                    department_id: 35,
                    user_id: 1,
                },
                // Event_12
                {
                    department_id: 36,
                    user_id: 2,
                },
                // Event_12
                {
                    department_id: 36,
                    user_id: 3,
                },
                // Event_12
                {
                    department_id: 34,
                    user_id: 4,
                },
                // Event_12
                {
                    department_id: 34,
                    user_id: 5,
                },
                // Event_12
                {
                    department_id: 36,
                    user_id: 6,
                },
                // Event_12
                {
                    department_id: 35,
                    user_id: 7,
                },
                // Event_12
                {
                    department_id: 35,
                    user_id: 8,
                },
                // Event_13
                {
                    department_id: 37,
                    user_id: 1,
                },
                // Event_13
                {
                    department_id: 38,
                    user_id: 2,
                },
                // Event_13
                {
                    department_id: 39,
                    user_id: 3,
                },
                // Event_13
                {
                    department_id: 39,
                    user_id: 4,
                },
                // Event_13
                {
                    department_id: 37,
                    user_id: 5,
                },
                // Event_13
                {
                    department_id: 38,
                    user_id: 6,
                },
                // Event_13
                {
                    department_id: 38,
                    user_id: 7,
                },
                // Event_13
                {
                    department_id: 39,
                    user_id: 8,
                },
                // Event_14
                {
                    department_id: 41,
                    user_id: 1,
                },
                // Event_14
                {
                    department_id: 42,
                    user_id: 2,
                },
                // Event_14
                {
                    department_id: 41,
                    user_id: 3,
                },
                // Event_14
                {
                    department_id: 40,
                    user_id: 4,
                },
                // Event_14
                {
                    department_id: 40,
                    user_id: 5,
                },
                // Event_14
                {
                    department_id: 42,
                    user_id: 6,
                },
                // Event_14
                {
                    department_id: 42,
                    user_id: 7,
                },
                // Event_14
                {
                    department_id: 41,
                    user_id: 8,
                },
                // Event_15
                {
                    department_id: 45,
                    user_id: 1,
                },
                // Event_15
                {
                    department_id: 43,
                    user_id: 2,
                },
                // Event_15
                {
                    department_id: 43,
                    user_id: 3,
                },
                // Event_15
                {
                    department_id: 45,
                    user_id: 4,
                },
                // Event_15
                {
                    department_id: 44,
                    user_id: 5,
                },
                // Event_15
                {
                    department_id: 45,
                    user_id: 6,
                },
                // Event_15
                {
                    department_id: 44,
                    user_id: 7,
                },
                // Event_15
                {
                    department_id: 45,
                    user_id: 8,
                },
                // Event_16
                {
                    department_id: 46,
                    user_id: 1,
                },
                // Event_16
                {
                    department_id: 48,
                    user_id: 2,
                },
                // Event_16
                {
                    department_id: 47,
                    user_id: 3,
                },
                // Event_16
                {
                    department_id: 46,
                    user_id: 4,
                },
                // Event_16
                {
                    department_id: 48,
                    user_id: 5,
                },
                // Event_16
                {
                    department_id: 46,
                    user_id: 6,
                },
                // Event_16
                {
                    department_id: 47,
                    user_id: 7,
                },
                // Event_16
                {
                    department_id: 47,
                    user_id: 8,
                },
                // Event_17
                {
                    department_id: 50,
                    user_id: 1,
                },
                // Event_17
                {
                    department_id: 49,
                    user_id: 2,
                },
                // Event_17
                {
                    department_id: 49,
                    user_id: 3,
                },
                // Event_17
                {
                    department_id: 49,
                    user_id: 4,
                },
                // Event_17
                {
                    department_id: 51,
                    user_id: 5,
                },
                // Event_17
                {
                    department_id: 51,
                    user_id: 6,
                },
                // Event_17
                {
                    department_id: 50,
                    user_id: 7,
                },
                // Event_17
                {
                    department_id: 15,
                    user_id: 8,
                },
                // Event_18
                {
                    department_id: 52,
                    user_id: 1,
                },
                // Event_18
                {
                    department_id: 53,
                    user_id: 2,
                },
                // Event_18
                {
                    department_id: 54,
                    user_id: 3,
                },
                // Event_18
                {
                    department_id: 54,
                    user_id: 4,
                },
                // Event_18
                {
                    department_id: 53,
                    user_id: 5,
                },
                // Event_18
                {
                    department_id: 52,
                    user_id: 6,
                },
                // Event_18
                {
                    department_id: 54,
                    user_id: 7,
                },
                // Event_18
                {
                    department_id: 53,
                    user_id: 8,
                },
                // Event_19
                {
                    department_id: 55,
                    user_id: 1,
                },
                // Event_19
                {
                    department_id: 57,
                    user_id: 2,
                },
                // Event_19
                {
                    department_id: 56,
                    user_id: 3,
                },
                // Event_19
                {
                    department_id: 56,
                    user_id: 4,
                },
                // Event_19
                {
                    department_id: 57,
                    user_id: 5,
                },
                // Event_19
                {
                    department_id: 55,
                    user_id: 6,
                },
                // Event_19
                {
                    department_id: 57,
                    user_id: 7,
                },
                // Event_19
                {
                    department_id: 55,
                    user_id: 8,
                },
                // Event_20
                {
                    department_id: 60,
                    user_id: 1,
                },
                // Event_20
                {
                    department_id: 60,
                    user_id: 2,
                },
                // Event_20
                {
                    department_id: 59,
                    user_id: 3,
                },
                // Event_20
                {
                    department_id: 59,
                    user_id: 4,
                },
                // Event_20
                {
                    department_id: 59,
                    user_id: 5,
                },
                // Event_20
                {
                    department_id: 58,
                    user_id: 6,
                },
                // Event_20
                {
                    department_id: 58,
                    user_id: 7,
                },
                // Event_20
                {
                    department_id: 58,
                    user_id: 8,
                },
                // Event_21
                {
                    department_id: 61,
                    user_id: 1,
                },
                // Event_21
                {
                    department_id: 62,
                    user_id: 2,
                },
                // Event_21
                {
                    department_id: 63,
                    user_id: 3,
                },
                // Event_21
                {
                    department_id: 63,
                    user_id: 4,
                },
                // Event_21
                {
                    department_id: 61,
                    user_id: 5,
                },
                // Event_21
                {
                    department_id: 62,
                    user_id: 6,
                },
                // Event_21
                {
                    department_id: 62,
                    user_id: 7,
                },
                // Event_21
                {
                    department_id: 63,
                    user_id: 8,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Candidates", null, {});
    },
};
