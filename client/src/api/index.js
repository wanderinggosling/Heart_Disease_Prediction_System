import axios from "axios";

const API = axios.create({baseURL:'http://localhost:8000'});

export const logIn=(authData)=>API.post('/user/login',authData);
export const signUp=(authData)=>API.post('/user/signup',authData);

export const getPatientByUser=(id)=>API.get(`/patient/getPatient/${id}`);
export const getAllPatient=()=>API.get('/patient/getAllPatient');
export const AddUserDetails=(userdata)=>API.post('/patient/AddUserDetails',userdata);
export const updatePatient=(userdata,id)=>API.patch(`/patient/updatePatient/${id}`,userdata);

export const AddDoctorDetails=(doctordata)=>API.post('/doctor/AddDoctorDetails',doctordata);
export const getAllDoctors = ()=>API.get('/doctor/getAllDoctors');
export const updateDoctor = (doctordata,id)=>API.patch(`/doctor/updateDoctor/${id}`,doctordata);