import mongoose from "mongoose";

import users from "./auth.js";

const doctorSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: users
    },
    imageUrl:{type : String, default:'https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'},
    fullname: { type: String },
    age: { type: Number },
    gender: { type: String },
    phone: { type: Number },
    address: { type: String },
    specialty: {
        type: String,
        required: true,
    },
    joinedOn: { type: Date, default: Date.now }
})

export default mongoose.model('doctor',doctorSchema);