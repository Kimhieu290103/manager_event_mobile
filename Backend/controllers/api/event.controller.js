require("dotenv").config();
const {
    getAll,
    showListEventByNumCandidate,
    getEventDetailById,
    getListCandidateByEventId,
    getListEventOwner,
    getListEventTakePartIn,
    deleteE,
    getEventByCategory,
} = require("../CRUD/event.js");
const cloudinary = require("../../config/cloudinary.config");
const { getCurrentDateTime } = require("../../helpers/datetime/index.js")
const objectCleaner = require("../../helpers/object-cleaner")
const { getTypeByName } = require("../CRUD/type.js");
const { createEvent, updateEvent } = require("../CRUD/event.js");
const { createDepartment } = require("../CRUD/department.js");
const { createNotiDetail } = require("../CRUD/notificationDetail.js");
const { createNotification } = require("../CRUD/notification.js");
const { createForm } = require("../CRUD/form.js");
const { createQuestion } = require("../CRUD/question.js");
const { response } = require("express");


async function index(request, response) {
    try {
        const queryResult = await getAll();

        queryResult.count = queryResult.rows.length;
        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getListEventUp5Candidate(request, response) {
    try {
        const num = request.params.num;

        const queryResult = await showListEventByNumCandidate(num);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showListEventByCategory(request, response) {
    try {
        const {category } = request.query;

        const queryResult = await getEventByCategory(category);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showListCandidateByEventId(request, response) {
    try {
        const id = request.params.id;

        const queryResult = await getListCandidateByEventId(id);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showListEventOwner(request, response) {
    try {
        const id = request.params.id;

        const queryResult = await getListEventOwner(id);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showListEventTakePartIn(request, response) {
    try {
        const id = request.params.id;

        const queryResult = await getListEventTakePartIn(id);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function showEventDetailById(request, response) {
    try {
        const id = request.params.id;

        const queryResult = await getEventDetailById(id);

        var numberCandidate = 0;

        queryResult.rows[0].Departments.forEach((element) => {
            numberCandidate += element.Candidates.length;
        });

        return response
            .status(200)
            .json({ queryResult: queryResult.rows[0], numberCandidate });
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function create(request, response) {
    try {
        const {
            // Event
            name,
            description,
            slogan,
            date_start,
            date_end,
            location,
            status,
            createdBy,
            type_name,
            departments,

            // Form
            questions,
        } = request.body;

        const departmentArray = JSON.parse(departments);
        const questionArray = JSON.parse(questions);

        const type_id = (await getTypeByName(type_name)).id;
        if (!request.file) {
            const image =
                "http://res.cloudinary.com/deei5izfg/image/upload/v1702004634/Mobile/gcbrzefat1xjps9qmexs.png";

            const newEvent = {
                name: name,
                description: description,
                slogan: slogan,
                date_start: date_start,
                date_end: date_end,
                location: location,
                image: image,
                status: status,
                createdBy: createdBy,
                type_id: type_id,
            };

            createEvent(newEvent).then(async (result) => {
                
                // Create department
                await departmentArray.forEach(async (department) => {
                    const newDepartment = {
                        name: department.name,
                        description: department.description,
                        event_id: result.id,
                    };

                    await createDepartment(newDepartment)
                });

                // Create Notification for owner
                const newNoti = {
                    event_id : result.id,
                    title : "Tạo sự kiện",
                    content : `Bạn đã tạo thành công sự kiện '${result.name}'`,
                    dateTime : getCurrentDateTime(),
                    isRead : false,
                    image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702350626/Mobile/rwfzyuqdbbhwignawnmq.png",
                    category : 1,
                }

                await createNotification(newNoti).then(async (createdNoti)=>{
                    const newNotiDetail = {
                        noti_id : createdNoti.id,
                        user_id : createdBy
                    }
                    await createNotiDetail(newNotiDetail);
                })

                // Create Form
                const newForm = {
                    category : 0,
                    title : `Tuyển thành viên cho sự kiện '${name}'`,
                    event_id : result.id
                }

                await createForm(newForm).then(async (createdForm)=>{
                    await questionArray.forEach((question)=>{
                        const newQuestion = {
                            form_id : createdForm.id,
                            question : question.name
                        }
                        createQuestion(newQuestion)
                    })
                    await createQuestion({
                        form_id : createdForm.id,
                        question : "Bạn muốn vào phòng ban nào ?",
                    })
                })

                // return
                return response.status(200).json({
                    message: "Create event successfully!",
                    result: result,
                });
            });
        } else {
            const fileBuffer = request.file.buffer;

            await cloudinary.uploader
                .upload_stream(
                    { resource_type: "auto", folder: "Mobile" },
                    (error, result) => {
                        if (error) {
                            return response
                                .status(500)
                                .json({
                                    error: "Error uploading image to Cloudinary",
                                });
                        }

                        const image = result.url;

                        const newEvent = {
                            name: name,
                            description: description,
                            slogan: slogan,
                            date_start: date_start,
                            date_end: date_end,
                            location: location,
                            image: image,
                            status: status,
                            createdBy: createdBy,
                            type_id: type_id,
                        };

                        createEvent(newEvent).then(async (result) => {
                            // Create department
                            await departmentArray.forEach(async (department) => {
                                const newDepartment = {
                                    name: department.name,
                                    description: department.description,
                                    event_id: result.id,
                                };

                                await createDepartment(newDepartment)
                            });

                            // Create Notification for owner
                            const newNoti = {
                                event_id : result.id,
                                title : "Tạo sự kiện",
                                content : `Bạn đã tạo thành công sự kiện '${result.name}'`,
                                dateTime : getCurrentDateTime(),
                                isRead : false,
                                image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702350626/Mobile/rwfzyuqdbbhwignawnmq.png",
                                category : 1,
                            }

                            await createNotification(newNoti).then(async (createdNoti)=>{
                                const newNotiDetail = {
                                    noti_id : createdNoti.id,
                                    user_id : createdBy
                                }
                                await createNotiDetail(newNotiDetail);
                            })

                            // Create Form
                            const newForm = {
                                category : 0,
                                title : `Tuyển thành viên cho sự kiện '${name}'`,
                                event_id : result.id
                            }

                            await createForm(newForm).then(async (createdForm)=>{
                                await questionArray.forEach((question)=>{
                                    const newQuestion = {
                                        form_id : createdForm.id,
                                        question : question.name
                                    }
                                    createQuestion(newQuestion)
                                })
                                
                                await createQuestion({
                                    form_id : createdForm.id,
                                    question : "Bạn muốn vào phòng ban nào ?",
                                })
                            })

                            return response.status(200).json({
                                message: "Create event successfully!",
                                result: result,
                            });
                        });
                    }
                )
                .end(fileBuffer);
        }
    } catch (e) {
        console.log(e);
    }
}

async function update(request, response) {
    try {
        const {slogan, name, location, event_id, description, date_start, date_end} = request.body;

        if(request.file)
        {
            const fileBuffer = request.file.buffer;

            await cloudinary.uploader.upload_stream(
                { resource_type: 'auto', folder: "Mobile" },
                async (error, result) => {
                    const image = result.url;
                    const newEvent = objectCleaner.clean({
                        slogan : slogan,
                        name : name, 
                        location : location,
                        image : image,
                        description : description,
                        date_start : date_start,
                        date_end : date_end,
                    })
            
            
                    await updateEvent(newEvent, event_id).then(async (result)=>{
                        return response
                        .status(200)
                        .json(await getEventDetailById(event_id))
                    })
                }
            ).end(fileBuffer);
        }
        else{
            const newEvent = objectCleaner.clean({
                slogan : slogan,
                name : name, 
                location : location,
                description : description,
                date_start : date_start,
                date_end : date_end,
            })
    
    
            await updateEvent(newEvent, event_id).then(async(result)=>{
                return response
                .status(200)
                .json(await getEventDetailById(event_id))
            })
        }

    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function deleteEvent(request, response)
{
    try {
        const id = request.params.id;

        await deleteE(id);

        return response.status(200).json({message : "delete successfull"});
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    getAllEvent: index,
    getListEventUp5Candidate: getListEventUp5Candidate,
    showEventDetailById: showEventDetailById,
    showListEventOwner : showListEventOwner,
    showListCandidateByEventId: showListCandidateByEventId,
    showListEventByCategory : showListEventByCategory,
    showListEventTakePartIn : showListEventTakePartIn,
    create: create,
    update : update,
    deleteEvent : deleteEvent,
};
