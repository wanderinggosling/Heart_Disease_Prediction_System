import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import html2pdf from 'html2pdf.js';

const ViewTestDetails = () => {

    const { id } =useParams();
    const { userId } = useParams();
   
    const Patient = useSelector((state) => state.patientReducer);

    
    const currPatient = Patient?.data?.filter((user) => user.userId === userId);

    const currTest = currPatient?.[0]?.test_history?.find((th) => th._id === id);



    const result = currTest?.result 
    const downloadPdf = () => {
        const element = document.getElementById('result-section');
        const fileName = "HDP" + Date.now()
        html2pdf().from(element).save(fileName);
    }

  return (
    <div>
    <div id='result-section' style={{fontFamily:'auto'}}>
        {result !== null && (
            <div className="result-container">
                <h3 style={{ display: "flex", justifyContent: "center", background: result ? "#ffd7d8" : "#d9f1d9", color: result ? "red" : "green" }}>
                    {result ? "The person has heart disease" : "The person does not have heart disease"}
                </h3>
            </div>
        )}
        <table >
      
            <tbody>
                
                    <tr>
                    <th>Data</th>
                    <th>Details</th>
                </tr>
                <tr>
                    <td>Age:</td>
                    <td>{currTest?.test_datas?.age}</td>
                </tr>
                <tr>
                    <td>Sex:</td>
                    <td>{currTest?.test_datas?.sex}</td>
                </tr>
                <tr>
                    <td>Chest Pain Type:</td>
                    <td>{currTest?.test_datas?.cp}</td>
                </tr>
                <tr>
                    <td>Resting Blood Pressure:</td>
                    <td>{currTest?.test_datas?.trestbps}</td>
                </tr>
                <tr>
                    <td>Serum Cholesterol:</td>
                    <td>{currTest?.test_datas?.chol}</td>
                </tr>
                <tr>
                    <td>Fasting Blood Sugar:</td>
                    <td>{currTest?.test_datas?.fbs}</td>
                </tr>
                <tr>
                    <td>Resting ECG:</td>
                    <td>{currTest?.test_datas?.restecg}</td>
                </tr>
                <tr>
                    <td>Max Heart Rate Achieved:</td>
                    <td>{currTest?.test_datas?.thalach}</td>
                </tr>
                <tr>
                    <td>Exercise Induced Angina:</td>
                    <td>{currTest?.test_datas?.exang}</td>
                </tr>
                <tr>
                    <td>ST Depression:</td>
                    <td>{currTest?.test_datas?.oldpeak}</td>
                </tr>
                <tr>
                    <td>Slope of Peak Exercise ST Segment:</td>
                    <td>{currTest?.test_datas?.slope}</td>
                </tr>
                <tr>
                    <td>Number of Major Vessels Colored:</td>
                    <td>{currTest?.test_datas?.ca}</td>
                </tr>
                <tr>
                    <td>Thalassemia:</td>
                    <td>{currTest?.test_datas?.thal}</td>
                </tr>
                </tbody>
         
                
           
        </table>
    </div>
    <div className="download-section">
        <button onClick={downloadPdf}>Download</button>
    </div>
</div>
  )
}

export default ViewTestDetails
