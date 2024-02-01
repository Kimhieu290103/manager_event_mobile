"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Notifications",
            [
                {
                    title: "Xác nhận tham gia sự kiện",
                    content:
                        "Bạn đã được xác nhận làm cộng tác viên cho sự kiện IT GenZ Festival do liên chi đoàn khoa Công nghệ thông tin tổ chức.",
                    dateTime: "2023-11-13 22:02:00",
                    isRead: true,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701833770/Mobile/m5vrtfownudiov4jg1ai.jpg",
                },
                {
                    title: "Tin nhắn mới",
                    content: "Một tin nhắn mới từ @minh_dac",
                    dateTime: "2023-10-13 14:02:00",
                    isRead: false,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930619/Mobile/og0zhmgcxco0a76pfhee.png",
                },
                {
                    title: "Sự kiện sắp bắt đầu",
                    content:
                        'Sự kiện Uni Hack Đà Nẵng lần thứ 11 đã bắt đầu, hãy nhanh tay đăng kí để trở thành cộng tác viên hỗ trợ sự kiện và nhận về điểm rèn luyện cũng như những "sự vui vẻ" bạn nhé!',
                    dateTime: "2023-12-13 00:00:59",
                    isRead: true,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930619/Mobile/og0zhmgcxco0a76pfhee.png",
                },
                {
                    title: "Nhiệm vụ chưa hoàn thành",
                    content:
                        "Kế hoạch tổng quan của sự kiện IT GenZ Festival chưa được hoàn thành. Nhanh tay làm bạn nhé!",
                    dateTime: "2023-12-13 00:00:00",
                    isRead: true,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930750/Mobile/ssexsqpii09nrwfnudi8.jpg",
                },
                {
                    title: "Thông báo quan trọng",
                    content: "Một tin nhắn mới từ @mautruongconaitei",
                    dateTime: "2023-11-18 10:30:00",
                    isRead: true,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930619/Mobile/og0zhmgcxco0a76pfhee.png",
                },
                {
                    title: "Thông tin đăng kí sự kiện",
                    content:
                        "Hãy đăng kí sự kiện Uni Hack Đà Nẵng trước ngày 25-11-2023 để đả bảo bạn có suất tham gia.",
                    dateTime: "2023-11-22 15:45:00",
                    isRead: false,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930619/Mobile/og0zhmgcxco0a76pfhee.png",
                },
                {
                    title: "Lời mời tham gia sự kiện",
                    content:
                        "Bạn nhận được lời mời tham gia buổi nói chuyện chia sẻ kinh nghiệm từ các chuyên gia trong ngành Công nghệ thông tin.",
                    dateTime: "2023-11-20 08:00:00",
                    isRead: true,
                    image: null,
                },
                {
                    title: "Thông báo kết quả đăng kí",
                    content:
                        "Kết quả đăng kí tham gia sự kiện Uni Hack Đà Nẵng sẽ được công bố vào ngày 27-11-2023. Chúcbạn may mắn!",
                    dateTime: "2023-11-25 18:30:00",
                    isRead: false,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930619/Mobile/og0zhmgcxco0a76pfhee.png",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Notifications", null, {});
    },
};
