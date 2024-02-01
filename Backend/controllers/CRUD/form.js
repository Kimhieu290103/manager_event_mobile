const models = require(process.cwd() + "/models");
const query = require("../../helpers/connect/connectDatabase.js");

async function create(form) {
    return models.Form.create(form);
}

const include = [
    {
        model: models.Question,
        attributes: ["question", "id"],
    },
    {
        model: models.Event,
        required: true,
    },
];

async function findFormApplicationByEventID(event_id) {
    return models.Form.findAndCountAll({
        include: include,
        where: {
            event_id: event_id,
            category: 0,
        },
    });
}

// get applicaiton form of candidate
const include2 = [
    {
        model: models.Question,
        attributes: ["question", "id"],
        include: [
            {
                model: models.Answer,
                attributes: ["user_id", "answer", "id"],
                include: [
                    {
                        model: models.User,
                        attributes: [
                            "name",
                            "gmail",
                            "telephone",
                            "address",
                            "university",
                        ],
                    },
                ],
            },
        ],
    },
];

async function findFormApplicationOfCandidate(event_id, user_id) {
    return models.Form.findAndCountAll({
        include: include2,
        where: {
            event_id: event_id,
            category: 0,
            "$Questions.Answers.user_id$": user_id,
        },
    });
}

async function findUserApplyEvent(event_id) {
    const sql = `
    SELECT Users.id, 
        MAX(Users.name) AS name, 
        MAX(Users.gmail) AS gmail,
        MAX(Users.avatar) AS avatar,
        MAX(Users.telephone) AS telephone
    FROM Users
    JOIN Answers ON Answers.user_id = Users.id
    JOIN Questions ON Answers.question_id = Questions.id
    JOIN Forms ON Forms.id = Questions.form_id
    WHERE Forms.event_id = ${event_id}
    AND Users.id NOT IN (
	    SELECT user_id FROM Candidates 
	    JOIN Departments ON Candidates.department_id = Departments.id
	    WHERE Departments.event_id = ${event_id}
    )
    AND Answers.isDeleted = false
    GROUP BY Users.id
    ORDER BY Users.id ASC;
`;
    return await query(sql)
}

module.exports = {
    createForm: create,
    findFormApplicationByEventID: findFormApplicationByEventID,
    findFormApplicationOfCandidate: findFormApplicationOfCandidate,
    findUserApplyEvent: findUserApplyEvent,
};
