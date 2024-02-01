const express = require('express');
const UploadController = require('../controllers/api/upload.image.controller');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), UploadController.uploadImage)

module.exports = router