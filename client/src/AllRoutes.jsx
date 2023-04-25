import React from 'react'
import { Routes,Route } from 'react-router-dom'
import TestForm from './Pages/TestForm/TestForm'
import Result from './Pages/Result/Result'
import Auth from './Pages/Auth/Auth'
import AddProfile from './Pages/Profile/AddProfile'
import ViewProfile from './Pages/Profile/ViewProfile'
import ViewTestDetails from './Pages/Profile/ViewTestDetails'
import About from './Pages/About/About'
import Doctors from './Pages/Doctors/Doctors'
import Home from './Pages/Home/Home'
import AddDoctor from './Pages/Doctors/AddDoctor'
import ViewDoctorProfile from './Pages/Doctors/ViewDoctorProfile'
import Patient from './Pages/Patient/Patient'
import AddDocDetail from './Pages/Doctors/AddDocDetail'
import ViewDocProf from './Pages/Profile/ViewDocProf'

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/test" element={<TestForm/>}></Route>
      <Route exact path="/result" element={<Result/>}></Route>
      <Route exact path="/login" element={<Auth/>}></Route>
      <Route exact path="/AddProfile" element={<AddProfile/>}></Route>
      <Route exact path="/ViewProfile/:id" element={<ViewProfile/>}></Route>
      <Route exact path="/ViewTestDetails/:userId/:id" element={<ViewTestDetails/>}></Route>
      <Route exact path="/About" element={<About/>}></Route>
      <Route exact path="/Doctors" element={<Doctors/>}></Route>
      <Route exact path="/AddDoctor" element={<AddDoctor/>}></Route>
      <Route exact path="/AddDoctor" element={<AddDoctor/>}></Route>
      <Route exact path="/ViewDoctorProfile/:id" element={<ViewDoctorProfile/>}></Route>
      <Route exact path="/patient" element={<Patient/>}></Route>
      <Route exact path="/AddDoctorDetails" element={<AddDocDetail/>}></Route>
      <Route exact path="/ViewDocProf" element={<ViewDocProf/>}></Route>

    </Routes>
  )
}

export default AllRoutes
