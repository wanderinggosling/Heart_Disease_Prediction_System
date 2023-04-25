import mongoose from "mongoose";

import doctor from "../models/doctor.js";

export const AddDoctorDetails = async(req,res)=>{
    try {
        const { userId, imageUrl, fullname, age, gender, phone, address, specialty} = req.body;

        const newDoctor= new doctor({
            userId, imageUrl, fullname, age, gender, phone, address, specialty
        })

        const savedDoctor = await newDoctor.save();
        res.json(savedDoctor);

    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}

export const updateDoctor = async(req,res)=>{
    try {
        const { id: _id } =req.params;
        const {imageUrl, fullname, age, phone, address, specialty} = req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(401).json({ message: "User not found" });
        }
        const doctorData = await doctor.findById(_id);

        doctorData.imageUrl = imageUrl ?? doctorData.imageUrl;
        doctorData.fullname = fullname ?? doctorData.fullname;
        doctorData.age = age ?? doctorData.age;
        doctorData.phone = phone ?? doctorData.phone;
        doctorData.address = address ?? doctorData.address;
        doctorData.specialty = specialty ?? doctorData.specialty;

        const updatedDoctor = await doctor.findByIdAndUpdate(_id, {$set : doctorData}, {new : true});
        res.status(200).json(updatedDoctor)
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}

export const getAllDoctors = async(req,res)=>{
    try {
        const data = await doctor.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}