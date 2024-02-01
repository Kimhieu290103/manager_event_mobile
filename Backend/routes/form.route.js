const express = require('express');
const FormApiControllers = require('../controllers/api/form.controller')
const router = express.Router();

router.get('/application_form/:id', FormApiControllers.getFormApp)

router.get('/application_form_of_candidate/', FormApiControllers.getFormAppOfCandidate)

router.get('/user_apply_event/', FormApiControllers.getUserApply)

module.exports = router