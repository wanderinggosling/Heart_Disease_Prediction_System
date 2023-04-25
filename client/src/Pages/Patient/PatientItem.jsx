import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import { Link } from 'react-router-dom'


const PatientItem = ({ patient }) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return (
        <div className='my-3'>
            <div className="card" style={{ "border": "none" }} >
                <Avatar
                    backgroundColor={randomColor==='white'?'red':`#${randomColor}`}
                    px="42px"
                    py="22px"
                    fontSize="50px"
                    borderRadius="0%"
                    color="white"
                >
                    {patient.fullname.charAt(0).toUpperCase()}
                </Avatar>
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "center" }}>{patient.fullname}</h5>
                    <p className="card-text" style={{ textAlign: "center" }}>{patient.phone}</p>
                    <Link to={`/ViewProfile/${patient.userId}`}> <button className="btn btn-md btn btn-primary" style={{ width: "100%", textAlign: "center" }} >View</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PatientItem
