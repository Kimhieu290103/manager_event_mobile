const express = require('express');
const EventApiControllers = require('../controllers/api/event.controller');
const eventController = require('../controllers/api/event.controller');
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', EventApiControllers.getAllEvent)

router.get('/list_events_by_num_candidates/:num', EventApiControllers.getListEventUp5Candidate)

router.get('/list_event_owner/:id', EventApiControllers.showListEventOwner)

router.get('/list_event_by_categorty/', EventApiControllers.showListEventByCategory)

router.get('/list_candidate/:id', EventApiControllers.showListCandidateByEventId)

router.get('/list_event_part_in/:id', EventApiControllers.showListEventTakePartIn)

router.get('/event_detail/:id',eventController.showEventDetailById)

router.post('/create/', upload.single('image'), eventController.create)

router.put('/update/', upload.single('image'), eventController.update)

router.delete('/delete/:id', eventController.deleteEvent)

module.exports = router