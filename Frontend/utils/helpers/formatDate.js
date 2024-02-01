import moment from 'moment'

const formatDateTime = (dateTimeString, outputFormat = 'YYYY-MM-DD') => {
    const formattedDateTime = moment(dateTimeString).format(outputFormat)
    return formattedDateTime
}

export default formatDateTime
