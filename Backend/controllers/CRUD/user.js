const models = require(process.cwd() + "/models");
const objectCleaner = require("../../helpers/object-cleaner");

async function showUserByAccount(gmail) {
    return models.User.findOne({
        where: { gmail: gmail },
    });
}

async function showUserByID(id) {
    return models.User.findOne({
        where: { id: id },
    });
}

async function index() {
    return models.User.findAndCountAll(
        objectCleaner.clean({
            order: [["id", "ASC"]],
        })
    );
}

async function create(user) {
    return models.User.create(user);
}

async function update(user, id) {
    return models.User.update(user,{
        where : {id : id}
    });
}

module.exports = {
    getUserByAccount : showUserByAccount,
    getUserByID : showUserByID,
    getAll: index,
    create : create,
    update : update,

};
