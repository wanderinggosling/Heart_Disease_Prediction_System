import React from 'react'
import { useParams } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar';
import Doctors from './Doctors';
import DoctorList from './DoctorList';
import { useSelector } from 'react-redux';

const ViewDoctorProfile = () => {
    const { id } = useParams();
    const DocList = useSelector((state) => state.doctorReducer);
    
    const doctorList=[{
        id:1,
        title:"Dr. Abcd",
        description:"MBBS",
        imageUrl:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

    },{
        id:2,
        title:"Dr. Abd",
        description:"MBBS",
        imageUrl:'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

    },{
        id:3,
        title:"Dr. Acd",
        description:"MBBS",
        imageUrl:'https://media.istockphoto.com/id/1049237020/photo/serious-attractive-young-male-doctor-with-stethoscope.jpg?s=170667a&w=0&k=20&c=dOimtB8CboXJN8KxNSCNmLg1x6wHCq-zSXBAQdu7Rzc='
    },{
        id:4,
        title:"Dr. Acde",
        description:"MBBS",
        imageUrl:'https://media.istockphoto.com/id/1049237020/photo/serious-attractive-young-male-doctor-with-stethoscope.jpg?s=170667a&w=0&k=20&c=dOimtB8CboXJN8KxNSCNmLg1x6wHCq-zSXBAQdu7Rzc='
    }]

    const currDoc=DocList?.data?.filter((d)=>d?._id===id);
    return (
        <div>
            <div className="profile-details" key={currDoc._id}>
                  <div className="avatar">
                    {/* <Avatar
                      backgroundColor="rgb(97 33 106)"
                      px="42px"
                      py="22px"
                      fontSize="50px"
                      borderRadius="0%"
                      color="white"
                    >
                      A
                    </Avatar> */}
                    <img src={currDoc?.[0]?.imageUrl} alt=""/>
                  </div>
                  <div className="profile" style={{color:"whitesmoke", fontFamily:"auto"}}>
                    <p>
                      <strong>Name:</strong>{' '}
                      <span id="name">{currDoc?.[0]?.fullname}</span>
                    </p>
                    <p>
                      <strong>Description:</strong>{' '}
                      <span id="age">{currDoc?.[0]?.specialty} </span>
                    </p>
                    
                    <p>
                      <strong>Phone:</strong>{' '}
                      <span id="phone">{currDoc?.[0]?.phone}</span>
                    </p>
                    <p>
                      <strong>Address:</strong>{' '}
                      <span id="address">{currDoc?.[0]?.address}</span>
                    </p>
               
                  </div>
                  
                </div>
                <div className="doctor-list" style={{width:"50%", margin:'auto'}}>
                    <h3 style={{color:'gold', textAlign:'center'}}>Recommended Doctors</h3>
                <DoctorList dlist={DocList?.data?.filter(d=>d._id!==id)}/>
                </div>
               
                
        </div>
    )
}

export default ViewDoctorProfile
