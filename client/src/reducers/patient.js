const patientReducer = (state = { data: null }, action) => {
    switch(action.type){
        // case 'FETCH_PATIENT_BY_ID':
        //     return { ...state, data: action.payload }
        case 'FETCH_ALL_PATIENT':
            return {...state, data:action.payload}
        case 'ADD_USER_DETAILS':
            return {...state}
        case 'UPDATE_PATIENT':
            return {...state}
        default:
            return state;
    }
}
 export default patientReducer