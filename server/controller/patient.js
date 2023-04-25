import mongoose from 'mongoose';
import patient from '../models/patient.js';

export const AddUserDetails = async (req, res) => {
    try {
        const { userId, fullname, age, gender, phone, address } = req.body;

        // Create a new patient object
        const newPatient = new patient({
            userId,
            fullname,
            age,
            gender,
            phone,
            address,
        });

        if (userId && fullname && age && gender && phone && address) {
            newPatient.authorized = true;
        }

        // Save the patient to the database
        const savedPatient = await newPatient.save();

        // Return the saved patient object as JSON
        res.json(savedPatient);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

export const AddUserTest = async (req, res) => {

    const { id: _id } = req.params;
    const { test_datas, result } = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.send(404).json("patient not found")
    }
    try {

        const updatedPatient = await (patient.findByIdAndUpdate(_id, { $addToSet: { 'test_history': [{ test_datas, result, date: Date.now() }] } }))
        res.status(200).json(updatedPatient);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}



export const getPatientByUser = async (req, res) => {
    const { id: userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(401).json({ message: "User not found" });
    }
    try {
        const currPatient = await patient.findOne({ userId });
        res.status(200).json(currPatient);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }
}

export const getAllPatients = async (req, res) => {
    try {
        const data = await patient.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }
}

export const updatePatient = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const {fullname, age, gender, phone, address} = req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(401).json({ message: "User not found" });
        }
        const patientData = await patient.findById(_id);

        if (!patientData) {
          return res.status(404).json({ message: "Patient not found" });
        }
    
        patientData.fullname = fullname ?? patientData.fullname;
        patientData.age = age ?? patientData.age;
        patientData.gender = gender ?? patientData.gender;
        patientData.phone = phone ?? patientData.phone;
        patientData.address = address ?? patientData.address;
    
        const updatedPatient = await patient.findByIdAndUpdate(
          _id,
          { $set: patientData },
          { new: true }
        );
    
        res.status(200).json(updatedPatient);

    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}

