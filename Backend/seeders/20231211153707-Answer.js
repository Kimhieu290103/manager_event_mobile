'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Answers",
      [
          {
            question_id : 1,
            user_id  : 4,
            answer : "Chưa tham event nào trước đây"
          },
          {
            question_id : 2,
            user_id  : 4,
            answer : "Tôi muốn biết liệu sự kiện có sử dụng phương tiện truyền thông nào để chia sẻ thông tin và tương tác với người tham gia hay không."
          },
          
          {
            question_id : 3,
            user_id  : 4,
            answer : "Tôi biết qua sự giới thiệu của bạn bè"
          },
          
          {
            question_id : 4,
            user_id  : 4,
            answer : "Mục tiêu của tôi khi tham gia là để giao lưu, học hỏi, phát triển bản thân"
          },
          
          {
            question_id : 5,
            user_id  : 4,
            answer : "Ban truyền thông"
          },
          {
            question_id : 1,
            user_id  : 3,
            answer : "Chưa tham event nào trước đây"
          },
          {
            question_id : 2,
            user_id  : 3,
            answer : "Tôi muốn biết liệu sự kiện có sử dụng phương tiện truyền thông nào để chia sẻ thông tin và tương tác với người tham gia hay không."
          },
          
          {
            question_id : 3,
            user_id  : 3,
            answer : "Tôi biết qua sự giới thiệu của bạn bè"
          },
          
          {
            question_id : 4,
            user_id  : 3,
            answer : "Mục tiêu của tôi khi tham gia là để giao lưu, học hỏi, phát triển bản thân"
          },
          
          {
            question_id : 5,
            user_id  : 3,
            answer : "Ban truyền thông"
          },
          {
            question_id : 6,
            user_id  : 2,
            answer : "Chưa tham event nào trước đây"
          },
          {
            question_id : 7,
            user_id  : 2,
            answer : "Tôi muốn biết liệu sự kiện có sử dụng phương tiện truyền thông nào để chia sẻ thông tin và tương tác với người tham gia hay không."
          },
          
          {
            question_id : 8,
            user_id  : 2,
            answer : "Tôi biết qua sự giới thiệu của bạn bè"
          },
          
          {
            question_id : 9,
            user_id  : 2,
            answer : "Ban kĩ thuật"
          },
          
          {
            question_id : 10,
            user_id  : 2,
            answer : "Tôi rất muốn tham gia và gặp gỡ những người khác nhưng vẫn chưa có kế hoạch"
          },
          {
            question_id : 11,
            user_id  : 3,
            answer : "Chưa tham event nào trước đây"
          },
          {
            question_id : 12,
            user_id  : 3,
            answer : "Tôi muốn biết liệu sự kiện có sử dụng phương tiện truyền thông nào để chia sẻ thông tin và tương tác với người tham gia hay không."
          },
            
          {
            question_id : 13,
            user_id  : 3,
            answer : "Tôi biết qua sự giới thiệu của bạn bè"
          },
          
          {
            question_id : 14,
            user_id  : 3,
            answer : "Mục tiêu của tôi khi tham gia là để giao lưu, học hỏi, phát triển bản thân"
          },
          
          {
            question_id : 15,
            user_id  : 3,
            answer : "Ban truyền thông"
          },
      ],
      {}
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Answers", null, {});
  }
};
