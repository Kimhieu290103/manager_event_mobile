const express = require('express');
const NotificationApiControllers = require('../controllers/api/notification.controller')
const router = express.Router();

router.get('/get_notification_by_status/', NotificationApiControllers.getNotificationByCategory)

router.put('/change_status/', NotificationApiControllers.changeStatusIsReadNoti)

module.exports = router