import axios from 'axios'

const apiUrl = 'https://highx5-manager-event-mobile.onrender.com'

const getEvents = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/event`)
        return response.data
    } catch (error) {
        throw error
    }
}

const getEventsHome = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/event/list_events_by_num_candidates/2`)
        return response.data
    } catch (error) {
        throw error
    }
}

const getEventDetail = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/api/event/event_detail/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const getEventByUserId = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/api/event/list_event_owner/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const getQuestionEvent = async (eventId) => {
    try {
        const response = await axios.get(`${apiUrl}/api/form/application_form/${eventId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const getListEventTakePartIn = async (userID) => {
    try {
        const response = await axios.get(`${apiUrl}/api/event/list_event_part_in/${userID}`)
        return response.data.rows
    } catch (error) {
        throw error
    }
}

const updateEvent = async (event) => {
    try {
        const response = await axios.put(
            `${apiUrl}/api/event/update/`,
            event,
            {
                headers: { 'content-type': 'multipart/form-data', },
            }
        )
        return response.data
    } catch (error) {
        throw error
    }
}

const createEvent = async (formData) => {
    try {
        const response = await axios.post(
            `${apiUrl}/api/event/create/`,
            formData,
            {
                headers: { 'content-type': 'multipart/form-data'},
            }
        )
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const deleteEvent = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/api/event/delete/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const getEventByCategory = async (category) => {
    try {
        const response = await axios.get(`${apiUrl}/api/event/list_event_by_categorty?category=${category}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export default {
    getEvents,
    getEventsHome,
    getEventDetail,
    getQuestionEvent,
    updateEvent,
    createEvent,
    deleteEvent,
    getEventByUserId,
    getEventByCategory,
    getListEventTakePartIn
}
