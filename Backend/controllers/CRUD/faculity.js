const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");

async function getFacultyByName(name) {
    console.log(name)
    return models.Faculity.findOne({
        where: { name: name },
    });
}

async function index(){
    return models.Faculity.findAndCountAll({
        attributes : ['name', 'id'],
        order: [['id', 'ASC']]
    });
}

module.exports = {
    getFacultyByName: getFacultyByName,
    index : index,
};
