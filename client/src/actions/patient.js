import * as api from '../api'


export const getAllPatient = ()=>async(dispatch)=>{
    try {
        const {data} = await api.getAllPatient();
        dispatch({type:"FETCH_ALL_PATIENT",payload:data})
    } catch (error) {
        console.log(error);
    }
}
export const getPatientByUser = (id) => async(dispatch)=>{
    try {
        const {data} = await api.getPatientByUser(id);
        dispatch({ type : 'FETCH_PATIENT_BY_ID', payload: data })
        console.log(id);
    } catch (error) {
        console.log(error);
    }
}

export const AddUserDetails = (userdata, navigate)=>async(dispatch)=>{
    try {
        const {data} = await api.AddUserDetails(userdata);
        dispatch({ type : 'ADD_USER_DETAILS', payload: data});
        dispatch(getAllPatient());
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const updatePatient = (userdata, id, navigate)=>async(dispatch)=>{
    try {
        const { data } = await api.updatePatient(userdata,id);
        dispatch({type : 'UPDATE_PATIENT', payload: data});
        dispatch(getAllPatient());
        navigate(`/ViewProfile/${data.userId}`);


    } catch (error) {
        console.log(error);
    }
}