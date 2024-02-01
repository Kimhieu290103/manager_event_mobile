const models = require(process.cwd() + "/models");

async function create(question) {
    return models.Question.create(question);
}

module.exports = {
    createQuestion: create,
};
