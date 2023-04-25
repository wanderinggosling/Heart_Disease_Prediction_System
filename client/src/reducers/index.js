import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import currentPatientReducer from "./currentPatient";
import patientReducer from "./patient";
import doctorReducer from "./doctor";


export default combineReducers({
    authReducer,currentUserReducer,currentPatientReducer,patientReducer,doctorReducer
})