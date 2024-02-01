const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");

const include = [
    {
        model: models.NotificationDetail,
        attributes: ["user_id"],
    },
];

async function getNotificationByUserId(userID) {
    return models.Notification.findAndCountAll(
        objectCleaner.clean({
            order: [["id", "ASC"]],
            include : include,
            where : {
                '$NotificationDetails.user_id$' : userID,
            }
        })
    );
}

async function getNotiByCategoryAndByUserID(category, userID) {
    return models.Notification.findAndCountAll(
        objectCleaner.clean({
            order: [["id", "ASC"]],
            include : include,
            where : {
                '$NotificationDetails.user_id$' : userID,
                category : category
            }
        })
    );
}

async function create(notification) {
    return models.Notification.create(notification);
}

async function update(noti, id) {
    return models.Notification.update(noti,{
        where : {id : id}
    });
}

async function getNotiById(id) {
    return models.Notification.findOne({
        where: { id: id },
    });
}

module.exports = {
    getNotificationByUserId: getNotificationByUserId,
    createNotification : create,
    updateNotification : update,
    getNotiById : getNotiById,
    getNotiByCategoryAndByUserID : getNotiByCategoryAndByUserID,
};
