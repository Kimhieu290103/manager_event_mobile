require('dotenv').config();

const { getEventByDepartment, getDeparmentByNameAndEventID } = require('../CRUD/department.js');
const { getEventCandidateTakePartIn, createCandidate } = require('../CRUD/candidate.js');
const { createNotification } = require('../CRUD/notification.js')
const { createNotiDetail } = require('../CRUD/notificationDetail.js');
const { getCurrentDateTime } = require('../../helpers/datetime/index.js');
const { getEventDetailById } = require('../CRUD/event.js');
const { deleteAnswer } = require('../CRUD/answer.js');


async function getEventCandidateTakePartInController(request, response) {
    try {
        const userID = request.params.id

        const queryResult = await getEventCandidateTakePartIn(userID);

        queryResult.count = queryResult.rows.length
        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function acceptCandidate(request,response)
{
    try {
        const {user_id , event_id, department_name} = request.body

        const department_id = (await getDeparmentByNameAndEventID(department_name, event_id)).id;


        const newCandidate = {
            department_id : department_id,
            user_id : user_id,
        }

        await createCandidate(newCandidate).then(async (result)=>{
            result.event = (await getEventByDepartment(department_id)).Event

            const event1 = result.event;
            // Tạo noti
            const newNoti = {
                event_id : event1.id,
                title : event1.name,
                content : `Bạn đã được chấp nhận tham gia vào sự kiện '${event1.name}'`,
                dateTime : getCurrentDateTime(),
                isRead : false,
                image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702183107/Mobile/pssybhsldjimufloxwk5.png",
                category : 0,
            }

            createNotification(newNoti).then((createdNoti)=>{
                createNotiDetail({
                    noti_id : createdNoti.id,
                    user_id : user_id,
                })
            })
            
            return response.status(200).json({message : "accept candidate successfully", result : result});
        })
        
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function refuseCandidate(request,response)
{
    try {
        const {user_id , event_id} = request.body
        console.log(event_id)
        
        await deleteAnswer(event_id, user_id);

        const event = (await getEventDetailById(event_id)).rows[0];

        // Tạo noti
        const newNoti = {
            event_id : event.id,
            title : event.name,
            content : `Bạn đã bị từ chối tham gia vào sự kiện '${event.name}'`,
            dateTime : getCurrentDateTime(),
            isRead : false,
            image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702357377/Mobile/o3eumkebyalcozbeqrdr.png",
            category : 1,
        }

        createNotification(newNoti).then((createdNoti)=>{
            createNotiDetail({
                noti_id : createdNoti.id,
                user_id : user_id,
            })
        })
        
        return response.status(200).json({message : "refuse candidate successfully"});

    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    getEventCandidateTakePartIn : getEventCandidateTakePartInController,
    acceptCandidate : acceptCandidate,
    refuseCandidate : refuseCandidate,
}