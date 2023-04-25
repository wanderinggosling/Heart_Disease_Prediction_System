import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import html2pdf from 'html2pdf.js';


import './Result.css'
const Result = () => {
    useEffect(() => {
        console.log("data: ", formData)
    } )

    const { state } = useLocation();
    const formData = state?.formData
    const result = state?.result;

    const downloadPdf = () => {
        const element = document.getElementById('result-section');
        const fileName = "HDP" + Date.now()
        html2pdf().from(element).save(fileName);
    }

    return (
        <>
            {formData.age !== "" ?
                <div>
                    <div id='result-section'>
                        {result !== null && (
                            <div className="result-container">
                                <h3 style={{ display: "flex", justifyContent: "center", background: result ? "#ffd7d8" : "#d9f1d9", color: result ? "red" : "green" }}>
                                    {result ? "The person has heart disease" : "The person does not have heart disease"}
                                </h3>
                            </div>
                        )}
                        <table>
                            <tbody>
                                <tr>
                                    <th>Data</th>
                                    <th>Details</th>
                                </tr>
                                <tr>
                                    <td>Age:</td>
                                    <td>{formData.age}</td>
                                </tr>
                                <tr>
                                    <td>Sex:</td>
                                    <td>{formData.sex}</td>
                                </tr>
                                <tr>
                                    <td>Chest Pain Type:</td>
                                    <td>{formData.cp}</td>
                                </tr>
                                <tr>
                                    <td>Resting Blood Pressure:</td>
                                    <td>{formData.trestbps}</td>
                                </tr>
                                <tr>
                                    <td>Serum Cholesterol:</td>
                                    <td>{formData.chol}</td>
                                </tr>
                                <tr>
                                    <td>Fasting Blood Sugar:</td>
                                    <td>{formData.fbs}</td>
                                </tr>
                                <tr>
                                    <td>Resting ECG:</td>
                                    <td>{formData.restecg}</td>
                                </tr>
                                <tr>
                                    <td>Max Heart Rate Achieved:</td>
                                    <td>{formData.thalach}</td>
                                </tr>
                                <tr>
                                    <td>Exercise Induced Angina:</td>
                                    <td>{formData.exang}</td>
                                </tr>
                                <tr>
                                    <td>ST Depression:</td>
                                    <td>{formData.oldpeak}</td>
                                </tr>
                                <tr>
                                    <td>Slope of Peak Exercise ST Segment:</td>
                                    <td>{formData.slope}</td>
                                </tr>
                                <tr>
                                    <td>Number of Major Vessels Colored:</td>
                                    <td>{formData.ca}</td>
                                </tr>
                                <tr>
                                    <td>Thalassemia:</td>
                                    <td>{formData.thal}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="download-section">
                        <button onClick={downloadPdf}>Download</button>
                    </div>
                </div>
                :
                <div className="empty-form">
                    <h2 >Please fill the form first</h2>
                    <Link to="/">Form</Link>
                </div>
            }
        </>
    );
}

export default Result
