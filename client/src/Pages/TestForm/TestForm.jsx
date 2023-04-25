import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './TestForm.css'


const TestForm = () => {
  const navigate = useNavigate();


  const User = useSelector((state) => (state.currentUserReducer));

  const Patient = useSelector((state) => state.patientReducer);

  const curr = Patient?.data?.filter(p => p.userId === User?.result._id);

  //Does not have heart diesease
  const sampleSecData = {
    "age": 52,
    "sex": 1,
    "cp": 0,
    "trestbps": 125,
    "chol": 212,
    "fbs": 0,
    "restecg": 1,
    "thalach": 168,
    "exang": 0,
    "oldpeak": 1,
    "slope": 2,
    "ca": 2,
    "thal": 3
  };

  //has heart diesease
  const sampleData = {
    "age": 34,
    "sex": 0,
    "cp": 1,
    "trestbps": 118,
    "chol": 210,
    "fbs": 0,
    "restecg": 1,
    "thalach": 192,
    "exang": 0,
    "oldpeak": 0.7,
    "slope": 2,
    "ca": 0,
    "thal": 2
  };
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });
  const [result, setResult] = useState(null);
  const [res, setres] = useState('');

  useEffect(() => {
    if (User?.result.role === 'patient' && curr.length === 0) {
      alert('Please add your profile details before taking the test')
      navigate('/AddProfile');
    }
    // curr?alert(curr[0]?._id):alert("curr is empty")
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setResult(response.data.output);
      console.log(sampleData)
      console.log(result);

      // update formData state with form values
      const updatedFormData = {
        ...formData, name: "Abcd"
      };

      const booleanResult = response.data.output === true;
      navigate({ pathname: "/result" }, { state: { formData: updatedFormData, result: booleanResult } });

      try {
        const res = await axios.patch(`http://localhost:8000/patient/AddUserTest/${curr[0]._id}`, { test_datas: formData, result: booleanResult });
        console.log("second api running")
        setres(res.data.message)
      } catch (error) {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }

  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <div>
      
      {/* <h1>{res}</h1> */}
      {/* <p style={{ textAlign: "center" }}>{sampleData.age}"+"
        {sampleData.sex}"+"
        {sampleData.cp}"+"
        {sampleData.trestbps}"+"
        {sampleData.chol}"+"
        {sampleData.fbs}"+"
        {sampleData.restecg}"+"
        {sampleData.thalach}"+"
        {sampleData.exang}"+"
        {sampleData.oldpeak}"+"
        {sampleData.slope}"+"
        {sampleData.ca}"+"
        {sampleData.thal}
      </p> */}
      <form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center",marginTop:"0%",marginBottom:"2%", fontFamily:"auto" }}>Heart Disease Prediction </h2>
        <div className="contain">
          <label htmlFor="age" >Age</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />

          <label htmlFor="sex" >Sex</label>
          <select id="sex" name="sex" value={formData.sex} onChange={handleChange} required>
            <option value="">--</option>
            <option value="0">Female</option>
            <option value="1">Male</option>
          </select>

          <label htmlFor="cp">Chest Pain Type</label>
          {/* <input type="number" min="0" max="3" id="cp" name="cp" value={formData.cp} onChange={handleChange} /> */}
          <select id="cp" value={formData.cp} onChange={handleChange} name="cp">
            <option value="">--</option>
            <option value="0">Typical Angina</option>
            <option value="1">Atypical Angina</option>
            <option value="2">Non-Anginal Pain</option>
            <option value="3">Asymptomatic</option>
          </select>

          <label htmlFor="trestbps">Resting Blood Pressure</label>
          <input type="number" min="94" max="200" id="trestbps" name="trestbps" value={formData.trestbps} onChange={handleChange} />

          <label htmlFor="chol">Cholesterol (mg/dL)</label>
          <input type="number" min="126" max="564" id="chol" name="chol" value={formData.chol} onChange={handleChange} />

          <label htmlFor="fbs">Fasting Blood Sugar</label>
          <select id="fbs" name="fbs" value={formData.fbs} onChange={handleChange} >
            <option value="">--</option>
            <option value="0">Less than 120mg/dl</option>
            <option value="1">Greater than 120mg/dl</option>
          </select>

          <label htmlFor="restecg">Resting ECG</label>
          {/* <input type="number" min="0" max="2" id="restecg" name="restecg" value={formData.restecg} onChange={handleChange} /> */}
          <select id="restecg" name="restecg" value={formData.restecg} onChange={handleChange}>
            <option value="">--</option>
            <option value="0">Normal</option>
            <option value="1">Abnormal</option>
            <option value="2">Probable Ventricular Hypertrophy</option>
          </select>

          <label htmlFor="thalach">Maximum Heart Rate Achieved</label>
          <input type="number" min="71" max="202" id="thalach" name="thalach" value={formData.thalach} onChange={handleChange} />

          <label htmlFor="exang">Exercise Induced Angina</label>
          <select name="exang" id="exang" value={formData.exang} onChange={handleChange}>
            <option value="--">--</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>

          <label htmlFor="oldpeak">Oldpeak (ST depression)</label>
          <input type="number" min="0" max="10" step="0.1" id="oldpeak" name="oldpeak" value={formData.oldpeak} onChange={handleChange} />

          <label htmlFor="slope">Slope of the Peak Exercise ST Segment</label>
          <input type="number" min="0" max="2" id="slope" name="slope" value={formData.slope} onChange={handleChange} />

          <label htmlFor="ca">Number of Major Vessels Colored by Flourosopy</label>
          <input type="number" min="0" max="4" id="ca" name="ca" value={formData.ca} onChange={handleChange} />

          <label htmlFor="thal">Thalassemia</label>
          {/* <input type="number" min="0" max="3" id="thal" name="thal" value={formData.thal} onChange={handleChange} /> */}
          <select id="thal" name="thal" value={formData.thal} onChange={handleChange}>
            <option value="">--</option>
            <option value="0">Normal</option>
            <option value="1">Fixed Defect</option>
            <option value="2">Reversible Defect</option>
          </select>

        </div>

        <div className="form-button">
          <input type="submit" name="submit" id="" value="Test" ></input>

        </div>
      </form>
    </div>
  )
}

export default TestForm

