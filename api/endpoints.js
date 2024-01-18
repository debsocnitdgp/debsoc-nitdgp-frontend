export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000'

const ENDPOINTS = {
    FINAL_YEAR: BASE_URL + '/members/final-years/',
    PRE_FINAL_YEAR: BASE_URL + '/members/pre-final-years/',
    ALUMNI: BASE_URL + '/members/all-members/', 
    SOPHOMORES: BASE_URL + '/members/sophomores/',
    ALL_EVENTS: BASE_URL + '/events/api/all_events/',
    UPCOMING_EVENTS: BASE_URL + '/events/api/upcoming_events/',
}

export default ENDPOINTS;