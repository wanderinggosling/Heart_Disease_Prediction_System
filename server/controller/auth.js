import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'

export const signup =async(req,res)=>{
    const {name, email, password, role}=req.body;
    try {
        const existinguser = await users.findOne({email});
        if(existinguser){
           return res.status(404).json({message: 'User already exist.'});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await users.create({name, email, password: hashedPassword, role});
        const token = await jwt.sign({email: newUser.email, id: newUser._id}, "test", {expiresIn : "1h"});
        res.status(200).json({result : newUser, token});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const login =async(req,res)=>{
    const {email, password}=req.body;
    try {
       const existinguser = await users.findOne({email});
       if(!existinguser){
            return res.status(404).json({message: "User does not exist."});
       } 
       const isPasswordCrt = bcrypt.compare(password, existinguser.password);
       if(!isPasswordCrt){
            return res.status(404).json({message:"Invalid credentials."});
       }
       const token = jwt.sign({email: existinguser.email, id: existinguser._id}, "test", {expiresIn: "1h"});
       res.status(200).json({result: existinguser, token});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
