const models = require(process.cwd() + "/models");

async function create(department) {
    return models.Department.create(department);
}

async function getEventByDepartment(department_id) {
    return models.Department.findOne({
        include : [{
            model : models.Event,
            required : true,
        }],
        where: { id: department_id },
    });
}

async function getDeparmentByNameAndEventID(department_name, event_id) {
    return models.Department.findOne({
        where: { 
            name: department_name,
            event_id : event_id
        },
    });
}


module.exports = {
    createDepartment : create,
    getEventByDepartment : getEventByDepartment,
    getDeparmentByNameAndEventID : getDeparmentByNameAndEventID
};
