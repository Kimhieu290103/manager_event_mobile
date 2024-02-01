'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
          {
	          form_id : 1,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 1,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 1,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 1,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 1,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
          {
	          form_id : 2,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 2,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 2,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 2,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 2,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
          //Event 3
          {
	          form_id : 3,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 3,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 3,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 3,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 3,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
          //Event 4
          {
	          form_id : 4,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 4,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 4,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 4,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 4,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
          //Event 5
          {
	          form_id : 5,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 5,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 5,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 5,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 5,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
          //Event 6
          {
	          form_id : 6,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 6,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 6,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 6,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 6,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 7
           {
	          form_id : 7,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 7,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 7,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 7,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 7,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 8
           {
	          form_id : 8,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 8,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 8,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 8,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 8,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 9
           {
	          form_id : 9,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 9,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 9,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 9,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 9,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 10
           {
	          form_id : 10,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 10,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 10,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 10,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 10,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 11
           {
	          form_id : 11,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 11,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 11,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 11,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 11,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 12
           {
	          form_id : 12,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 12,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 12,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 12,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 12,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 13
           {
	          form_id : 13,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 13,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 13,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 13,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 13,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 14
           {
	          form_id : 14,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 14,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 14,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 14,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 14,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 15
           {
	          form_id : 15,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 15,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 15,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 15,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 15,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 16
           {
	          form_id : 16,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 16,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 16,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 16,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 16,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 17
           {
	          form_id : 17,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 17,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 17,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 17,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 17,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 18
           {
	          form_id : 18,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 18,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 18,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 18,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 18,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 19
           {
	          form_id : 19,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 19,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 19,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 19,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 19,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 20
           {
	          form_id : 20,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 20,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 20,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 20,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 20,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
           //Event 21
           {
	          form_id : 21,
	          question : "Bạn đã tham gia câu lạc bộ nào trước đây chưa"
          },
          {
	          form_id : 21,
	          question : "Có những khía cạnh nào của sự kiện mà bạn muốn tìm hiểu thêm?"
          },
          {
	          form_id : 21,
	          question : "Bạn đã biết về sự kiện này qua phương tiện nào?"
          },
          {
	          form_id : 21,
	          question : "Mục tiêu của bạn khi tham gia là gì?"
          },
          {
	          form_id : 21,
	          question : "Bạn muốn tham gia phòng ban nào?"
          },
      ],
      {}
  );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  }
};
