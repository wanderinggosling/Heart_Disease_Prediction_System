const currentPatientReducer = (state=null, action)=>{
    switch (action.type) {
        case 'FETCH_CURRENT_PATIENT':
            return action.payload
    
        default:
            return state;
    }
}

export default currentPatientReducer