require("dotenv").config();
const { createAnswer } = require("../CRUD/answer");

async function answerForm(request, response) {
    try {
        const { user_id , answer_array, department_name } = request.body;

        answer_array.forEach((answer)=>{
            var newAns = {
                question_id : answer.question_id,
                user_id : user_id,
                answer : answer.answer
            }
            if(answer.answer == "department")
            {
                newAns = {
                    question_id : answer.question_id,
                    user_id : user_id,
                    answer : department_name
                }
            }
            createAnswer(newAns);
        })

        return response.status(200).json({message : "your answers have been recorded"});
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    answerForm: answerForm,
};
