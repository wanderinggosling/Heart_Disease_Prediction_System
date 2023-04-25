import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import './Patient.css'
import PatientList from './PatientList';
import { useNavigate } from 'react-router-dom';

const Patient = () => {
    const [search, setsearch] = useState("");
    const navigate = useNavigate();

    const onchange = (e) => {
        setsearch(e.target.value);
    }
    const User = useSelector((state)=>state.currentUserReducer);
    
    const DocList = useSelector((state)=>state.doctorReducer);
    const currDoc = DocList?.data?.filter(d=>d.userId===User?.result?._id);
    
    const Patients= useSelector((state) => state.patientReducer);

    useEffect(()=>{
        console.log(DocList);
       if(User?.result?.role === 'doctor' && currDoc?.length === 0){
        alert("please complete your profile first");
        navigate('/AddDoctorDetails');
       } 
    })
    return (
        <>
        <div className='container my-3' style={{justifyContent:'center'}}>
           {/* {User?.result?.role!== 'admin'?null:<Link to = '/AddDoctor'><button>Add Doctor</button></Link>}  */}
            <h1 className="text-center" style={{ "color": "aliceblue" }}>Patients</h1>
            <div className="col-md-3">
            </div>
            <PatientList plist={Patients}/>
            
        </div>
    </>

    )
}

export default Patient
