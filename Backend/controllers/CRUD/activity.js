const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");
const { Op } = require('sequelize');

async function create(activity) {
    return models.Activity.create(activity);
}

async function update(activity, id) {
    return models.Activity.update(activity,{
        where : { id : id }
    });
}

const include = [
    {
        model : models.Candidate,
        attributes : ['department_id', 'user_id', 'id'],
        include : [{
            model : models.User,
            attributes : ['id', 'name', 'gmail', 'telephone', 'address', 'gender', 'avatar', 'birthday', 'university'],
        }]
    },
    {
        model : models.Event,
        attributes : ['id', 'name', 'description', 'slogan', 'date_start', 'date_end', 'location', 'image', 'status', 'createdBy', 'type_id', 'isDeleted'],
    }
]

async function findActivityByUserId(user_id, status)
{
    return models.Activity.findAndCountAll({
        include : include,
        where : objectCleaner.clean({
            "$Candidate.user_id$" : user_id,
            status : status
        }),
    });
}

async function findAllActivityByUserId(user_id)
{
    return models.Activity.findAndCountAll({
        include : include,
        where : objectCleaner.clean({
            "$Candidate.user_id$" : user_id,
        }),
    });
}

async function findActivityByEventIDAndStatus(event_id, status)
{
    return models.Activity.findAndCountAll({
        include : include,
        where : objectCleaner.clean({
            event_id : event_id,
            status : status,
        }),
    });
}

async function findActivityUnDelivered(event_id)
{
    return models.Activity.findAndCountAll({
        include : include,
        where : {
            event_id : event_id,
            candidate_id : null
        },
    });
}

async function findActivityDelivered(event_id) {
    return models.Activity.findAndCountAll({
        include: include,
        where: {
            event_id: event_id,
            candidate_id: {
                [Op.ne]: null, // Sử dụng toán tử "not equal"
            },
        },
    });
}

async function findAllActivityByEventID(event_id)
{
    return models.Activity.findAndCountAll({
        include : include,
        where : {
            event_id : event_id,
        },
    });
}

async function findActivityByID(id)
{
    return models.Activity.findOne({
        include : include,
        where : {
            id : id
        },
    });
}

module.exports = {
    createActivity: create,
    updateActivity : update,
    findActivityByUserId : findActivityByUserId,
    findActivityByID : findActivityByID,
    findActivityByEventIDAndStatus : findActivityByEventIDAndStatus,
    findAllActivityByUserId : findAllActivityByUserId,
    findAllActivityByEventID : findAllActivityByEventID,
    findActivityUnDelivered : findActivityUnDelivered,
    findActivityDelivered : findActivityDelivered
};
