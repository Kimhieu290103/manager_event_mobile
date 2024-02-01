require('dotenv').config();

const { getFacultyByName, index } = require('../CRUD/faculity');

async function getListFaculity(request, response) {
    try {
        const queryResult = await index();

        queryResult.count = queryResult.rows.length
        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    getListFaculity : getListFaculity,
}