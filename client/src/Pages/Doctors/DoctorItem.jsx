import React from 'react'
import { Link } from 'react-router-dom'

const DoctorItem = ({ id, title, imageUrl, description, handleChange,handleclick }) => {
  return (
<div className='my-3'>
      <div className="card" style={{ "border": "none", height: "400px" }} >
        <img src={imageUrl} className="card-img-top" alt="..." style={{ height:"50%" }} />
        <div className="card-body" style={{ height: "50%", overflow: "hidden" }}>
          <h5 className="card-title" style={{ textAlign:"center", minHeight: "50px" }}>Dr. {title}</h5>
          <p className="card-text" style={{ textAlign:"center" }}>{description}</p>
          <Link to={`/ViewDoctorProfile/${id}`}>
            <button className="btn btn-md btn btn-primary" onClick={(e)=>{handleclick()}} style={{ width:"100%", textAlign:"center" }}>View</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DoctorItem
