import React from 'react'
import PatientItem from './PatientItem'

const PatientList = ({plist}) => {
  return (
    <div>
    <div className="row" style={{ "overflowY": "scroll", "maxHeight": "78vh", "marginTop": "1vh" }}>
        {plist?.data?.map((element, index) => {
            return <div className="col-md-4 col-sm-6" key={index} style={{display: 'grid', width: '30%'}}>
                <PatientItem patient={element}/>
            </div>
        })}
    </div>
</div>
  )
}

export default PatientList
