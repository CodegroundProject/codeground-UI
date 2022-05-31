const  baseUrlTest = "http://localhost:3000";

const BASE_URL_CONTENT_MANAGEMENT="http://localhost:3000"
const BASE_URL_GRADING_SERVICE="http://localhost:3001"
module.exports={
    ENDPOINT_GET_POSTS : `${baseUrlTest}/posts`,
    ENDPOINT_POST_POST : `${baseUrlTest}/posts`,
    ENDPOINT_POST_LOGIN : `${baseUrlTest}/api/web_login`,
    ENDPOINT_POST_RESET_PASSWORD : `${baseUrlTest}/api/web_passwordReset/admin`,

    ENDPOINT_GET_LOCATAIRES_REQUESTS: `${baseUrlTest}/api/locataire/waiting`,
    ENDPOINT_POST_ACCEPT_LOCATAIRE : `${baseUrlTest}/api/signup/locataire/validate`,
    ENDPOINT_POST_REJECT_LOCATAIRE : `${baseUrlTest}/api/signup/locataire/reject`,

    ENDPOINT_GET_DEVEROUILLAGE_REQUESTS: `${baseUrlTest}/api/locataire/validated`,

    ENDPOINT_GET_DECIDEURS_PROFILES: `${baseUrlTest}/api/decideurs/all`,
    ENDPOINT_POST_ADD_DECIDEUR: `${baseUrlTest}/api/signup/decideur`,
    ENDPOINT_PUT_UPDATE_DECIDEUR_EMAIL: `${baseUrlTest}/api/web_settings/decideur/email/`,
    ENDPOINT_PUT_UPDATE_DECIDEUR_PASSSWORD: `${baseUrlTest}/api/web_settings/decideur/password/`,
    ENDPOINT_PATCH_TOGGLE_BLOCK_DECIDEUR: `${baseUrlTest}/api/accounts/toggle-block/decideur`,
    ENDPOINT_DELETE_REMOVE_DECIDEUR: `${baseUrlTest}/api/decideurs/delete`,

    ENDPOINT_GET_AMS : `${baseUrlTest}/api/agents/all`,
    ENDPOINT_GET_AM : `${baseUrlTest}/api/agents/`,
    ENDPOINT_POST_ADD_AM: `${baseUrlTest}/api/signup/agent`,
    ENDPOINT_DELETE_REMOVE_AM: `${baseUrlTest}/api/accounts/agent`,

    ENDPOINT_PUT_DECIDEUR_PROFIL : `${baseUrlTest}/api/web_settings/decideur/email/`,

    ENDPOINT_GET_REPORTS_LISTS : `${baseUrlTest}/api/reportsLists`,

    // ALOOOG

    ENDPOINT_GET_CHALLENGE : `${BASE_URL_CONTENT_MANAGEMENT}/api/challenges/`,
    ENDPOINT_SUBMIT : `${BASE_URL_GRADING_SERVICE}/api/submit`
}

