import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AddDoctorDetails, updateDoctor } from '../../actions/doctor';

const AddDocDetail = () => {
  const User = useSelector((state) => state.currentUserReducer);
  const DocList = useSelector((state) => state.doctorReducer);


  var curr = DocList?.data?.filter(d => d?.userId === User?.result._id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [profile, setProfile] = useState({
    imageUrl: curr ? curr?.[0]?.imageUrl : '',
    fullname: curr ? curr?.[0]?.fullname : '',
    age: curr ? curr?.[0]?.age : '',
    phone: curr ? curr?.[0]?.phone : '',
    address: curr ? curr?.[0]?.address : '',
    specialty: curr ? curr?.[0]?.specialty : ''
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }



  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateDoctor(profile, curr?.[0]?._id, navigate));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(Patient.data.filter((p)=>p.userId===User?.result._id))
    // console.log(curr)
    if (curr.length === 0) {
      dispatch(AddDoctorDetails({
        userId: User?.result._id,
        imageUrl: profile.imageUrl,
        fullname: profile.fullname,
        age: profile.age,
        phone: profile.phone,
        address: profile.address,
        specialty: profile.specialty
      }, navigate))

      console.log(profile)
    }
    else {
      // dispatch(setCurrentPatient(JSON.parse(curr)))
      console.log(curr);
      alert("You already have a profile " + curr?.[0]?.fullname)
    }

  }

  useEffect(() => {
    if (User?.result?.role !== 'doctor') {
      navigate('/');
    }
  })

  return (
    <div>
      <h3 style={{ textAlign: "center", color: "whitesmoke" }}>Add Profile</h3>
      <form onSubmit={curr?.length !== 0 ? handleEdit : handleSubmit}>
        <div className="form-contain">
          <label htmlFor="imageUrl">Image </label>
          <input type="text" id="imageUrl" name="imageUrl" value={profile.imageUrl} onChange={handleChange} />

          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" value={profile.fullname} onChange={handleChange} />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" value={profile.age} onChange={handleChange} />

          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" name="phone" value={profile.phone} onChange={handleChange} />

          <label htmlFor="address">Address</label>
          <textarea type="text" id="address" name="address" value={profile.address} onChange={handleChange}></textarea>

          <label htmlFor="specialty">Specialty</label>
          <input type="text" id="specialty" name="specialty" value={profile.specialty} onChange={handleChange} />
        </div>
        <div className="form-button">
          <input type="submit" name="submit" id="" value="Save Profile"></input>
        </div>
      </form>
    </div>
  )
}

export default AddDocDetail
