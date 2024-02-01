require('dotenv').config();

const { getNotificationByUserId, updateNotification, getNotiById, getNotiByCategoryAndByUserID } = require('../CRUD/notification.js');

async function changeStatusIsReadNoti(request, response)
{
    try {
        const noti_id = request.body.noti_id;
        const isRead = request.body.isRead;

        const newNoti = {
            isRead : isRead,
        }
        
        await updateNotification(newNoti, noti_id);

        const updatedNoti = await getNotiById(noti_id);

        return response.status(200).json({message : "update status success", updated_notification : updatedNoti});

    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getNotificationByCategory(request, response)
{
    try {
        const {category, user_id} = request.query;
        console.log(category, user_id)
        
        var queryResult;

        if( category == undefined || category == 3 )
        {
            queryResult = await getNotificationByUserId(user_id)
        }
        else
        {
            queryResult = await getNotiByCategoryAndByUserID(category, user_id)
        }

        queryResult.count = queryResult.rows.length
        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    changeStatusIsReadNoti : changeStatusIsReadNoti,
    getNotificationByCategory : getNotificationByCategory
}