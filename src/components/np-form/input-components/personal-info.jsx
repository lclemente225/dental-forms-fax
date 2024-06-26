import React from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'
import states from './states'
import TextInputs from '../../text-inputs'
import RenderJSONInputs from './form-components/render-json-inputs'
import { patientInfo, maritalStatus, schoolLocationInfo, schoolStatus, employerInfo, employeeInfo } from './form-components/personal-info-form-inputs-json'

const PersonalInfo = () => {
  const {data, handleChange} = useNPFormContext()
  const stateSelect = states.map((object, index) => {
    return (<option key={index} value={object.name}>{object.abbreviation}</option>)
  })
  return (
    <div className="np-form-input-container">
      <h2>Patient Information (Confidential)</h2> 
      <RenderJSONInputs arrayOfJson={patientInfo} />
      
      <label>State
        <select 
          name="state"
          value={data.state}
          onChange={handleChange}>
            { stateSelect }
        </select>
      </label>
      <TextInputs title="Phone Number" name="phoneNum" type="tel"/>
          
      <h3>Check appropriate box</h3>
      <div className='marital-status-inputs-container'>
      <RenderJSONInputs arrayOfJson={maritalStatus} />
        
      </div>
      <hr/> 
      <RenderJSONInputs arrayOfJson={schoolLocationInfo} />
      <label>State/Province
           <select 
            name="schoolStateProvince"
            value={data.schoolStateProvince}
            onChange={handleChange}>
            { stateSelect }
          </select>
      </label> 
      <RenderJSONInputs arrayOfJson={schoolStatus} />
      <hr/>
      <RenderJSONInputs arrayOfJson={employerInfo} />
      <label>Business State / Province
           <select 
          name="employerStateProvince"
          value={data.employerStateProvince}
          onChange={handleChange}>
            { stateSelect }
            </select>
      </label>  
      <RenderJSONInputs arrayOfJson={employeeInfo} />
    </div>
  )
}

export default PersonalInfo
