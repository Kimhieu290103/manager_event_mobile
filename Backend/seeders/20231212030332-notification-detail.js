'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "NotificationDetails",
      [
          {
            noti_id : 10,
	          user_id : 1,
          },
          {
            noti_id : 11,
	          user_id : 1,
          },
          {
            noti_id : 12,
	          user_id : 1,
          },
          {
            noti_id : 13,
	          user_id : 2,
          },
          {
            noti_id : 14,
	          user_id : 3,
          },
          {
            noti_id : 15,
	          user_id : 2,
          },
          {
            noti_id : 16,
	          user_id : 4,
          },
          {
            noti_id : 17,
	          user_id : 5,
          },
      ],
      {}
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("NotificationDetails", null, {});
  }
};
