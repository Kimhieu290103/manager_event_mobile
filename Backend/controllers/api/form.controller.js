require("dotenv").config();
const { findFormApplicationByEventID, findFormApplicationOfCandidate, findUserApplyEvent } = require("../CRUD/form");

async function getFormApp(request, response) {
    try {
        const id = request.params.id;

        const queryResult = await findFormApplicationByEventID(id);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getFormAppOfCandidate(request,response)
{
    try {
        const {event_id, user_id} = request.query;

        const queryResult = await findFormApplicationOfCandidate(event_id, user_id);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getUserApply(request, response)
{
    try {
        const {event_id} = request.query;

        const queryResult = await findUserApplyEvent(event_id);

        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    getFormApp: getFormApp,
    getFormAppOfCandidate : getFormAppOfCandidate,
    getUserApply : getUserApply
};
