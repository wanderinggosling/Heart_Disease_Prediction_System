import React, { useEffect, useState } from 'react'
import './AddProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddUserDetails, updatePatient } from '../../actions/patient';
import { setCurrentPatient } from '../../actions/currentPatient';
const AddProfile = () => {

    const navigate =useNavigate();
    var User = useSelector((state) => (state.currentUserReducer));
    
    var  userId = User?.result?._id;
    var Patient = useSelector((state) => state.patientReducer);
    var curr=Patient?.data.filter(p=>p?.userId===User?.result._id);
    // var currPaitent = useSelector((state)=>state.currentPatientReducer)
  
   
  
    // const currPatient = Patient?.data?.filter((p) => p?.userId === User?.result._id);

    const [profile,setProfile] = useState({
        fullname:curr? curr?.[0]?.fullname:'',
        age:curr ? curr?.[0]?.age:'',
        gender:curr? curr?.[0]?.gender==='Female'?'0':'1':'',
        phone:curr ? curr?.[0]?.phone : '',
        address:curr ? curr?.[0]?.address:''
    });

    const handleChange=(e)=>{
        setProfile({...profile, [e.target.name]: e.target.value})
    }

   const handleEdit = (e)=>{
    e.preventDefault();
    dispatch(updatePatient(profile, curr?.[0]?._id, navigate));
   }

    const handleSubmit=(e)=>{
        e.preventDefault();
        // alert(Patient.data.filter((p)=>p.userId===User?.result._id))
        // console.log(curr)
        if(curr.length===0){
            dispatch(AddUserDetails({
                userId : User?.result._id,
                fullname : profile.fullname,
                age : profile.age,
                gender :profile.gender? 'Male':'Female',
                phone: profile.phone,
                address : profile.address
            },navigate))
     
        console.log(profile)
        }
        else{
            // dispatch(setCurrentPatient(JSON.parse(curr)))
            console.log(curr);
            alert("You already have a profile "+curr?.[0]?.fullname)
        }
 
    }   

    // useEffect(()=>{
    //     if(curr?.length!==0){
    //         setProfile({fullname:curr? curr?.[0]?.fullname:'',
    //         age:curr ? curr?.[0]?.age:'',
    //         gender:curr? curr?.[0]?.gender==='Female'?'0':'1':'',
    //         phone:curr ? curr?.[0]?.phone : '',
    //         address:curr ? curr?.[0]?.address:''})
    //     }

    // },[curr])
    
    const dispatch = useDispatch();





    return (
        <div >
             {Patient[0]?.fullname}
             <h3 style={{textAlign:"center", color:'whitesmoke'}}>Add Profile</h3>
            <form onSubmit={curr.length!==0?handleEdit:handleSubmit}>
                <div className="form-contain">
                    <label htmlFor="fullname" >Full Name</label>
                    <input type="text" id="fullname" name="fullname" value={profile.fullname} onChange={handleChange} />

                    <label htmlFor="age" >Age</label>
                    <input type="number" id="age" name="age" value={profile.age} onChange={handleChange} />

                    <label htmlFor="sex" >Sex</label>
                    <select id="sex" name="gender" value={profile.gender} onChange={handleChange} >
                        <option value="">--</option>
                        <option value="0">Female</option>
                        <option value="1">Male</option>
                    </select>

                    <label htmlFor="phone" >Phone</label>
                    <input type="number" id="phone" name="phone" value={profile.phone} onChange={handleChange} />

                    <label htmlFor="address" >Address</label>
                    <textarea type="text" id="address" name="address" value={profile.address} onChange={handleChange} />

                </div>
                <div className="form-button">
                    <input type="submit" name="submit" id="" value="Save Profile" ></input>

                </div>
            </form>
        </div>
    )
}

export default AddProfile
