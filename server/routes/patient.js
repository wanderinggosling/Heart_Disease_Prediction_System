import express from 'express'
import { AddUserDetails, AddUserTest, getAllPatients, getPatientByUser, updatePatient } from '../controller/patient.js'

const router = express.Router();
router.post('/AddUserDetails',AddUserDetails);
router.patch('/AddUserTest/:id',AddUserTest);
router.get('/getPatient/:id',getPatientByUser);
router.get('/getAllPatient',getAllPatients);
router.patch('/updatePatient/:id',updatePatient);



export default router

