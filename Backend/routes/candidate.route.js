const express = require('express');

const router = express.Router();

const candidateController = require('../controllers/api/candidate.controller')

router.get('/event_take_part_in/:id', candidateController.getEventCandidateTakePartIn);

router.post('/accept_candidate/', candidateController.acceptCandidate);

router.post('/refuse_candidate/', candidateController.refuseCandidate);


module.exports = router;
