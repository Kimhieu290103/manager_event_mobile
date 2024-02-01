import axios from 'axios'
import user from './user'

const apiUrl = 'https://highx5-manager-event-mobile.onrender.com'

const getNotifications = async (user_id, category) => {
    try {
        const response = await axios.get(`${apiUrl}/api/notification/get_notification_by_status/?user_id=${user_id}&category=${category}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const readNotification = async (noti_id) => {
    try {
        const response =  await axios.put(
            `${apiUrl}/api/notification/change_status/`,
            {
                noti_id,
                isRead : true
            },
            {
                headers: { 'Content-Type': 'application/json' },
            }
        )
    } catch (error) {
        
    }
}

export default {
    getNotifications,
    readNotification
}
