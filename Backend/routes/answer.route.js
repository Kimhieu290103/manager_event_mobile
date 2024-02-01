const express = require('express');
const AnswerApiControllers = require('../controllers/api/answer.controller')
const router = express.Router();

router.post('/create_answer/', AnswerApiControllers.answerForm)

module.exports = router