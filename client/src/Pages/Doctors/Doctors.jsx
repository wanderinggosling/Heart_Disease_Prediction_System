import React, {useState} from 'react'
import DoctorItem from './DoctorItem'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DoctorList from './DoctorList';

const Doctors = () => {
    const [search, setsearch] = useState("");

    const User = useSelector((state) => state.currentUserReducer);

    const DocList = useSelector((state) => state.doctorReducer);

    const navigate = useNavigate();
    const onchange = (e) => {
        setsearch(e.target.value);
    }
     
   
  
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
    }]
  return (
    <>
            <div className='container my-3'>
               {User?.result?.role!== 'admin'?null:<Link to = '/AddDoctor'><button>Add Doctor</button></Link>} 
                <h1 className="text-center" style={{ "color": "aliceblue" }}>Doctors</h1>
                <div className="col-md-3">
                </div>
                <div className="input-group" style={{ "marginTop": "20px" }}>
                    <div className="form-outline" style={{ "marginLeft": "auto" }}>
                        <input type="search" id="form1" className="form-control" placeholder="search" onChange={(e) => { onchange(e) }} />
                    </div>
                </div>
          <DoctorList dlist={DocList?.data?.filter((element) => element.fullname.toLowerCase().includes(search))}/>
            </div>
        </>
  )
}

export default Doctors
