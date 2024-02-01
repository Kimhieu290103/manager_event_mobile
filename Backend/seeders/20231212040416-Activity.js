'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Activities",
      [
          {
            event_id : 1,
            date_start : "2024-06-13",
            date_end : "2024-06-15",
            content : "Tạo poster cho sự kiện",
            status : 0, 
            candidate_id : 2,
          },
          {
            event_id : 2,
            date_start : "2024-02-20",
            date_end : "2024-02-25",
            content : "Tạo Content cho sự kiện",
            status : 0, 
            candidate_id : 10,
          },
          {
            event_id : 3,
            date_start : "2024-02-20",
            date_end : "2024-02-25",
            content : "Chuẩn bị dụng cụ cho sự kiện",
            status : 0, 
            candidate_id : 19,
          },
          {
            event_id : 4,
            date_start : "2024-02-20",
            date_end : "2024-02-25",
            content : "Soạn thảo văn bản dẫn sự kiện chương trình",
            status : 0, 
            candidate_id : 27,
          },
          {
            event_id : 5,
            date_start : "2023-11-22",
            date_end : "2023-11-29",
            content : "Chuẩn bị bài hát biểu diễn",
            status : 0, 
            candidate_id : 35,
          },
          {
            event_id : 6,
            date_start : "2023-10-20",
            date_end : "2023-11-25",
            content : "Thống kê danh sách tham gia sự kiện",
            status : 0, 
            candidate_id : 43,
          },
          {
            event_id : 7,
            date_start : "2023-04-20",
            date_end : "2023-05-12",
            content : "Tạo Content cho sự kiện",
            status : 0, 
            candidate_id : 50,
          },
          {
            event_id : 8,
            date_start : "2023-04-20",
            date_end : "2023-05-12",
            content : "Tạo Content cho sự kiện",
            status : 0, 
            candidate_id : 58,
          },
      ],
      {}
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Activities", null, {});
  }
};
