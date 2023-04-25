import mongoose from 'mongoose'

import users from './auth.js'

const patientSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : users
    },
    fullname : {type : String},
    age : {type : Number},
    gender : {type : String},
    phone : {type: Number},
    address : {type : String},
    authorized : {type :Boolean ,default : false},
    test_history:[{
        test_datas:{ 
            age: {type: Number},
            sex: {type: Number},
            cp: {type: Number},
            trestbps: {type: Number},
            chol: {type: Number},
            fbs: {type: Number},
            restecg: {type: Number},
            thalach: {type: Number},
            exang: {type: Number},
            oldpeak: {type: Number},
            slope: {type: Number},
            ca: {type: Number},
            thal: {type: Number}
        },
        result : Boolean,
        date :{type : Date, default : Date.now}
    }] 
})

export default mongoose.model('patient',patientSchema)