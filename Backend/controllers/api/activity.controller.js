require("dotenv").config();
const { createActivity, findActivityByUserId, updateActivity, findActivityByID, findActivityByEventIDAndStatus, findAllActivityByUserId, findAllActivityByEventID, findActivityUnDelivered, findActivityDelivered } = require("../CRUD/activity");
const { getEventDetailById } = require('../CRUD/event');
const { createNotification } = require("../CRUD/notification");
const { createNotiDetail } = require("../CRUD/notificationDetail");

const objectCleaner = require("../../helpers/object-cleaner");
const { getCurrentDateTime } = require("../../helpers/datetime");


async function addActivity(request, response) {
    try {
        const { event_id , date_start, date_end, content, candidate_id } = request.body;

        const newAct = {
            event_id : event_id,
            date_start : date_start,
            date_end : date_end,
            content : content,
            status : 0,
        }

        createActivity(newAct).then((result)=>{
            return response.status(200).json({message : "create activity successfully", result: result});
        })
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getActivityByUser(request, response)
{
    try {
        const { status , user_id } = request.query;

        var result;

        if(status != 2)
        {
            result = await findActivityByUserId(user_id, status)
        }
        else
        {
            result = await findAllActivityByUserId(user_id);   
        }

        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getActivityByEvent(request, response)
{
    try {
        const { status , event_id, delivered } = request.query;

        console.log(status , event_id, delivered)
        var result;

        if(!delivered && !status)
        {
            console.log(1)
            result = await findAllActivityByEventID(event_id);  
        }
        else
        {
            if(delivered == '0')
            {
                console.log(2)
                result = await findActivityUnDelivered(event_id)
            }
            else
            {
                if(status){
                    console.log(3)
                    result = await findActivityByEventIDAndStatus(event_id, status)
                }
                else{
                    console.log(4)
                    result = await findActivityDelivered(event_id)
                }
            }
        }

        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function updateActivityController(request, response) {
    try {
        const { activity_id, status , date_start, date_end, content, candidate_id } = request.body;

        const updateAct = objectCleaner.clean({
            date_start : date_start,
            date_end : date_end,
            content : content,
            status : status,
            candidate_id : candidate_id,
        })

        updateActivity(updateAct, activity_id).then(async (result)=>{
            return response.status(200).json({message : "update activity successfully", result: await findActivityByID(activity_id)});
        })
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function deliveredTask(request, response)
{
    try {
        const{activity_id , candidate_id, event_id, user_id, event_name} = request.body;

        const newNoti = {
            event_id : event_id,
            title : "Nhiệm vụ",
            content : `Bạn đã được giao một nhiệm vụ trong sự kiện '${event_name}'`,
            dateTime : getCurrentDateTime(),
            isRead : false,
            image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702615718/Mobile/bopnqwgqtv1cjnlmyxcc.png",
            category : 2,
        }

        await createNotification(newNoti).then((createdNoti)=>{
            const newNotiDetail = {
                noti_id : createdNoti.id,
                user_id : user_id
            }
            
            createNotiDetail(newNotiDetail);
        })

        await updateActivity({candidate_id : candidate_id}, activity_id).then(async()=>{
            return response.status(200).json({message : "delivered successfull", activity : await findActivityByID(activity_id)});
        })

    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    addActivity : addActivity,
    getActivityByUser : getActivityByUser,
    getActivityByEvent : getActivityByEvent,
    updateActivityController : updateActivityController,
    deliveredTask : deliveredTask,
};
