const auth = require('./auth.route')
const user = require('./user.route')
const notification = require("./notification.route")
const event = require("./event.route")
const candidate = require("./candidate.route")
const uploadImage = require("./upload.image.route")
const faculity = require("./faculity.route")
const form = require("./form.route")
const answer = require("./answer.route")
const activity = require("./activity.route")

module.exports = {
    auth : auth,
    user : user,
    notification : notification,
    event : event,
    candidate : candidate,
    uploadImage : uploadImage,
    faculity : faculity,
    form : form,
    answer : answer,
    activity : activity,
}
