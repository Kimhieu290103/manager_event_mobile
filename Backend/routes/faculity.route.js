const express = require('express');
const FaculityApiControllers = require('../controllers/api/faculity.controller')
const router = express.Router();

router.get('/', FaculityApiControllers.getListFaculity)

module.exports = router