import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDoctor } from '../../actions/doctor';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const role = 'doctor';

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const User = useSelector((state) => state.currentUserReducer);



    const handleSubmit=(e)=>{
        e.preventDefault();
        try {
            if(!name && !email && !password){
                alert("Enter all the details.")
            }
            dispatch(addDoctor({name,email,password,role},navigate));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(User?.result?.role!=='admin'){
            navigate('/');
        }
    })

    
    return (
        <div >
            <h3 style={{ textAlign: "center", color: 'whitesmoke' }}>Add Doctor</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-contain">
                    <label htmlFor="fullname" >Name</label>
                    <input type="text" id="fullname" name="fullname"  onChange={(e)=>setName(e.target.value)} />

                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" name="email"  onChange={(e)=>setEmail(e.target.value)} />


                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} />

                </div>
                <div className="form-button">
                    <input type="submit" name="submit" id="" value="Add doctor" ></input>

                </div>
            </form>
        </div>
    )
}

export default AddDoctor
