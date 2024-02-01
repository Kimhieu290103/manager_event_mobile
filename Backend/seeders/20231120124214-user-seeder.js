"use strict";
const hashHelper = require(process.cwd() + "/helpers/password-encrypter");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Users",
            [
                {
                    name: "Admin123",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "https://res.cloudinary.com/deei5izfg/image/upload/v1702443921/Mobile/fsa4klhp1jup9deqcfld.jpg",
                    gmail: "admin123@gmail.com",
                    password: hashHelper.hash("Admin123*"),
                    faculity_id : 1,
                    university : "Bách Khoa Đà Nẵng"
                },
                {
                    name: "Nguyễn Văn Dũng",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1702443983/Mobile/nagos8sgp9dgxikokvt7.jpg", 
                    gmail: "dung1702@gmail.com",
                    password: hashHelper.hash("Dung123*"),
                    faculity_id : 1,
                    university : "Bách Khoa Đà Nẵng"
                },
                {
                  name: "Ngô Mậu Trường",
                  gender: "Male",
                  birthday: "2003-05-24",
                  telephone: "0905116391",
                  address: "Number 1 in your heart",
                  avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1702444015/Mobile/d0wvmrzy878oywigqeaj.jpg", 
                  gmail: "truong123@gmail.com",
                  password: hashHelper.hash("Truong123*"),
                  faculity_id : 1,
                  university : "Bách Khoa Đà Nẵng"
                },
                {
                  name: "Trần Thị Ngọc Quyên",
                  gender: "Female",
                  birthday: "2003-01-10",
                  telephone: "0905116391",
                  address: "Number 1 in your heart",
                  avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1702444048/Mobile/m4liuwr1fudgqqkjyo0p.jpg", 
                  gmail: "quyen123@gmail.com",
                  password: hashHelper.hash("Quyen123*"),
                  faculity_id : 1,
                  university : "Bách Khoa Đà Nẵng"
              },{
                  name: "Trần Kim Hiếu",
                  gender: "Male",
                  birthday: "2003-01-29",
                  telephone: "0905116391",
                  address: "Number 1 in your heart",
                  avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1702444076/Mobile/si7nn1tn2jylo5bwjjtb.jpg", 
                  gmail: "hieu123@gmail.com",
                  password: hashHelper.hash("Hieu123*"),
                  faculity_id : 1,
                  university : "Bách Khoa Đà Nẵng"
                },
                {
                    name: "Phạm Bình Minh",
                    gender: "Male",
                    birthday: "2003-10-25",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701831728/Mobile/dvrabhlic5sfe9f1lxad.jpg", 
                    gmail: "minh123@gmail.com",
                    password: hashHelper.hash("minh123"),
                    faculity_id : 1,
                    university : "Bách Khoa Đà Nẵng"
                  },
                  {
                    name: "Lý Mộ Uyển",
                    gender: "Female",
                    birthday: "2003-03-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1702444106/Mobile/lkurq42wxlkre11zekka.jpg", 
                    gmail: "kiet123@gmail.com",
                    password: hashHelper.hash("kiet123"),
                    faculity_id : 1,
                    university : "Bách Khoa Đà Nẵng"
                  },
                  {
                    name: "Trần Vân Hi",
                    gender: "Female",
                    birthday: "2003-11-22",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1702444134/Mobile/cgt3dtw1x3qmemmu5utt.jpg", 
                    gmail: "thanh123@gmail.com",
                    password: hashHelper.hash("thanh123"),
                    faculity_id : 1,
                    university : "Bách Khoa Đà Nẵng"
                  },
                  {
                    name: "Thương Tâm Từ",
                    gender: "Female",
                    birthday: "2003-03-07",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1702444156/Mobile/yao04cbj3riprjsdrzwq.jpg", 
                    gmail: "duy123@gmail.com",
                    password: hashHelper.hash("duy123"),
                    faculity_id : 1,
                    university : "Bách Khoa Đà Nẵng"
                  },
                  {
                    name: "Nguyen Van A",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: "https://res.cloudinary.com/deei5izfg/image/upload/v1702443921/Mobile/fsa4klhp1jup9deqcfld.jpg",
                    gmail: "Vanaa",
                    password: hashHelper.hash("Vana123*"),
                    faculity_id : 1,
                    university : "Bách Khoa Đà Nẵng"
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", null, {});
    },
};
