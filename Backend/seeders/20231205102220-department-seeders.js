"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Departments",
            [  //event1 
                {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 1
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 1
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 1
                },
                // Event_2
                {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 2
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 2
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 2
                },
                // Event_3
                {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 3
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 3
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 3
                },
                // Event_4
                {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 4
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 4
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 4
                },
                // Event_5
                {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 5
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 5
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 5
                },
                // Event_6
                {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 6
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 6
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 6
                },
                // Event_7
                {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 7
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 7
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 7
                },
                // Event_8
                {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 8
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 8
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 8
                },
                // Event_9
                {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 9
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 9
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 9
                },
                 // Event_10
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 10
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 10
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 10
                },
                 // Event_11
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 11
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 11
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 11
                },
                 // Event_12
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 12
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 12
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 12
                },
                 // Event_13
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 13
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 13
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 13
                },
                 // Event_14
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 14
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 14
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 14
                },
                 // Event_15
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 15
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 15
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 15
                },
                 // Event_16
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 16
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 16
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 16
                },
                 // Event_17
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 17
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 17
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 17
                },
                 // Event_18
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 18
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 18
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 18
                },
                 // Event_19
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 19
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 19
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 19
                },
                 // Event_20
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 20
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 20
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 20
                },
                 // Event_21
                 {
                    name: "Ban truyền thông",
                    description: "Ban Truyền Thông không chỉ là những người biết cách làm cho thông điệp trở nên thú vị, mà còn là những người có khả năng tạo ra sự kết nối với đông đảo khán giả.",
                    event_id: 21
                },
                {
                    name: "Ban nội dung",
                    description: "Ban Nội Dung không chỉ là những người sở hữu kỹ năng viết văn xuất sắc, mà còn là những người hiểu rõ về cách tạo ra trải nghiệm tuyệt vời nhất cho khách hàng. Chúng tôi là những người đam mê về nội dung sáng tạo, từ lên ý tưởng cho đến viết văn bản sáng tạo và nắm vững thông điệp chính của sự kiện.",
                    event_id: 21
                },
                {
                    name: "Ban kĩ thuật",
                    description: "Ban Kỹ Thuật là nhóm chuyên gia đa lĩnh vực, từ kỹ sư phần mềm, chuyên gia hạ tầng mạng đến chuyên gia thiết bị âm thanh và ánh sáng. Chúng tôi sẵn lòng đối mặt với mọi thách thức để đưa sự kiện của bạn lên một tầm cao mới.",
                    event_id: 21
                },

            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Departments", null, {});
    },
};
