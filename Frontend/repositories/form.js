import axios from 'axios'
import axiosClient from './axiosClient'

const getFormByEventId = async (event_id) => {
    try {
        const response = await axiosClient.application.get(`/api/form/application_form/${event_id}`)
        return response.data.rows[0]
    } catch (error) {
        throw error
    }
}

const getAnswerOfEvent = async (event_id, user_id) => {
    try {
        const response = await axiosClient.application.get(`/api/form/application_form_of_candidate/?event_id=${event_id}&user_id=${user_id}`)
        return await response.data.rows[0]
    } catch (error) {
        throw error
    }
}

const getListUserApply = async (event_id)=>{
    try {
        const url = `/api/form/user_apply_event/?event_id=${event_id}`
        return (await axiosClient.application.get(url)).data
    } catch (error) {
        throw error
    }
}

const createAnswer = async (answer)=>{
    try {
        const url = `/api/answer/create_answer/`
        return (await axiosClient.application.post(url, answer)).data
    } catch (error) {
        throw error
    }
}

const acceptForm = async (form)=>{
    try {
        const url = `/api/candidate/accept_candidate/`
        return (await axiosClient.application.post(url, form)).data
    } catch (error) {
        throw error
    }
}
const denyForm = async (form)=>{
    try {
        const url = `/api/candidate/refuse_candidate/`
        return (await axiosClient.application.post(url, form)).data
    } catch (error) {
        throw error
    }
}

export default {
    getFormByEventId,
    getAnswerOfEvent,
    getListUserApply,
    createAnswer,
    acceptForm,
    denyForm
}
