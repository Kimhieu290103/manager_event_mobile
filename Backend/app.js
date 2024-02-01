const express = require('express')

const routes = require('./routes')
const path = require('path');
const cors = require('cors');

const app = express()

app.use(express.json());

// Sử dụng middleware CORS
app.use(cors());

const staticPath = path.join(__dirname, 'public');

app.get('/',(req,res) => {
    res.send('HighX5-Manager_Event_Mobile')
})

app.use(express.static(staticPath));
app.use('/public', express.static('public'))
app.use('/api/auth', routes.auth)
app.use('/api/user', routes.user)
app.use('/api/faculity', routes.faculity)

app.use('/api/notification', routes.notification)
app.use('/api/event', routes.event)

app.use('/api/candidate', routes.candidate)
app.use('/api/form', routes.form)
app.use('/api/answer', routes.answer)
app.use('/api/activity', routes.activity)

app.use('/api/upload_image', routes.uploadImage)

module.exports = app