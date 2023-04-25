import React, {useState}from 'react'
import DoctorItem from './DoctorItem'
import { useNavigate } from 'react-router-dom';

const DoctorList = ({dlist}) => {

  

   
    const navigate = useNavigate();
    const handleclick=()=>{
        // navigate('/ViewProfile/642e7c6f0e7919f86a526219');
    }


    return (
        <div>
        <div className="row" style={{ "overflowY": "scroll", "maxHeight": "78vh", "marginTop": "1vh" }}>
          {dlist?.map((element, index) => {
            return <div className="col-md-4 col-sm-6" key={element.id} style={{display:"grid"}}>
              <DoctorItem id={element?._id} title={element?.fullname} description={element?.specialty ? element.specialty.slice(0, 88) : ""}
                imageUrl={element?.imageUrl ? element.imageUrl : require('../../assets/profilePic.jpg')} handleclick={handleclick}
              ></DoctorItem>
            </div>
          })}
        </div>
      </div>
    )
}

export default DoctorList
