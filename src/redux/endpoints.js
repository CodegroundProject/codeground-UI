const BASE_URL_CONTENT_MANAGEMENT = "http://localhost:3000"
const BASE_URL_GRADING_SERVICE = "http://localhost:3001"
module.exports = {
    ENDPOINT_GET_CHALLENGE: `${BASE_URL_CONTENT_MANAGEMENT}/api/challenges/`,
    ENDPOINT_SUBMIT: `${BASE_URL_GRADING_SERVICE}/api/submit`
}

