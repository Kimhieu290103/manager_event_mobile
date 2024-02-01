const models = require(process.cwd() + "/models");

async function getTypeByName(name) {
    console.log(name)
    return models.TypeEvent.findOne({
        where: { type: name },
    });
}

async function index(){
    return models.TypeEvent.findAndCountAll({
        attributes : ['type', 'id'],
        order: [['id', 'ASC']]
    });
}

module.exports = {
    getTypeByName: getTypeByName,
    index : index,
};
