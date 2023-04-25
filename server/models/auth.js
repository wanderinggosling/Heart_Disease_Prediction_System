import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'patient' },
    joinedOn: { type: Date, default: Date.now }
})

export default mongoose.model('User',UserSchema)
