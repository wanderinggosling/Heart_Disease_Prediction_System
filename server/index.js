import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/users.js'
import patientRoutes from './routes/patient.js'
import doctorRoutes from './routes/doctor.js'

const app = express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.get('/', (req, res) => {
    res.send("HDPS api");
})

app.use('/user',userRoutes);
app.use('/patient', patientRoutes);
app.use('/doctor',doctorRoutes);

const PORT = process.env.PORT || 8000

const CONNECTION_URL = "mongodb://127.0.0.1:27017/HDPS"

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message));
