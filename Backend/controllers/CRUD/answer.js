const query = require("../../helpers/connect/connectDatabase");

const models = require(process.cwd() + "/models");

async function create(answer) {
    return models.Answer.create(answer);
}

const include = [
    {
        model: models.Question,
        required: true,
        include: [
            {
                model: models.Form,
                required: true,
            }
        ]
    }
];

async function deleteAnswer(event_id, user_id) {
    // return models.Answer.update({ isDeleted: true }, {
    //     include: include,
    //     where: {
    //         user_id: user_id,
    //         '$Question.Form.event_id$': event_id
    //     }
    // });
    const sql = `UPDATE Answers
    JOIN Questions ON Answers.question_id = Questions.id
    JOIN Forms ON Questions.form_id = Forms.id
    SET Answers.isDeleted = true
    WHERE Answers.user_id = ${user_id}
    AND Forms.event_id = ${event_id}
    `
    return await query(sql);
}

module.exports = {
    createAnswer: create,
    deleteAnswer : deleteAnswer,
};
