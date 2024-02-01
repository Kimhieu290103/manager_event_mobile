'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Forms",
      [
           {
            category:0,
            title: "Tuyển thành viên cho 'K23 - Bén lửa sinh ra'",
            event_id : 1,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'IT - GEN Z FESTIVAL'",
            event_id : 2,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'IT LEAGUE 2024'",
            event_id : 3,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'CodeFest 2023'",
            event_id :4,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'TechXperience Expo'",
            event_id : 5,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'Thách thức Data Crunch'",
            event_id : 6,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'InnoHackathon 2023'",
            event_id : 7,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'Hội nghị FutureTech'",
            event_id : 8,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'IT VOLLEYBALL TEAM'",
            event_id : 9,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'UNIHACK 2023'",
            event_id : 10,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'IT LOL 2023'",
            event_id : 11,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'BKDN TECHSHOW 2023'",
            event_id : 12,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'K22 - LET'S COMPILE'",
            event_id : 13,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'WE MIX, YOU MATCH - ONE DAY LEFT!'",
            event_id : 14,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'THẮP SÁNG TRUNG THU'",
            event_id : 15,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho '[IC RE³] - RECAP - OUR BEST MEMORIES!'",
            event_id : 16,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho '[5 DAYS CHALLENGE] - BETTER BY MY SELF - HERE WE GO!'",
            event_id : 17,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'IT ESPORT - LOL'",
            event_id : 18,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'DUT PROGRAMING CHALLENGE 2021'",
            event_id : 19,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'IT ESPORT - LEAGUE OF LEGENDS 2021'",
            event_id : 20,
           },
           {
            
            category:0,
            title: "Tuyển thành viên cho 'BKDN TECHSHOW 2021'",
            event_id : 21,
           },
      ],
      {}
  );
},


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Forms", null, {});
  }
};
