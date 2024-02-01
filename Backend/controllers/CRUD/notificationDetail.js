const models = require(process.cwd() + "/models");

async function create(notiDetail) {
    return models.NotificationDetail.create(notiDetail);
}

module.exports = {
    createNotiDetail: create,
};
