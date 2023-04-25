import express from 'express'
import { AddDoctorDetails, getAllDoctors, updateDoctor } from '../controller/doctor.js'

const router = express.Router();
router.post('/AddDoctorDetails',AddDoctorDetails);
router.get('/getAllDoctors',getAllDoctors);
router.patch('/updateDoctor/:id',updateDoctor);

export default router