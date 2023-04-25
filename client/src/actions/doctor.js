import * as api from '../api'

export const addDoctor=(authData,navigate)=>async(dispatch)=>{
    try {
        const {data} = await api.signUp(authData);
        dispatch({type:'Add_DOCTOR',data});
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const AddDoctorDetails = (doctorData, navigate)=>async(dispatch)=>{
    try {
        const {data} = await api.AddDoctorDetails(doctorData);
        dispatch({type:"ADD_DOCTOR_DETAILS",data});
        dispatch(getAllDoctors());
        navigate('/');  
    } catch (error) {
        console.log(error);
    }
}

export const getAllDoctors = ()=>async(dispatch)=>{
    try {
        const {data} = await api.getAllDoctors();
        dispatch({type : "GET_ALL_DOCTORS",payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateDoctor =(doctordata,id,navigate)=>async(dispatch)=>{
    try {
        const { data } = await api.updateDoctor(doctordata,id);
        dispatch({type : 'UPDATE_DOCTOR', payload: data});
        dispatch(getAllDoctors());
        navigate('/');

    } catch (error) {
        console.log(error);
    }
}