import React from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'
import states from './states'
import TextInputs from './form-components/text-inputs'
import RadioInputs from './form-components/radio-inputs'
import { patientInfo,maritalStatus,schoolStatus } from './form-components/personal-info-form-inputs-json'

const PersonalInfo = () => {
  const {data, handleChange} = useNPFormContext()
  const stateSelect = states.map((object, index) => {
    return (<option key={index} value={object.name}>{object.abbreviation}</option>)
  })
  return (
    <div className="np-form-input-container">
      <h2>Patient Information (Confidential)</h2> 
      {
        patientInfo.map((object,index) => {
          return (
            <TextInputs 
              key={index}
              title={object["title"]} 
              name={object["name"]} 
            />
          )
        })
      }
      
      <label>State
        <select 
          name="state"
          value={data.state}
          onChange={handleChange}>
            { stateSelect }
        </select>
      </label>
      <TextInputs title="Phone Number" name="phoneNum"/>
          
      <h3>Check appropriate box</h3>
      <div className='marital-status-inputs-container'>
        {
          maritalStatus.map((object,index) => {
              return (
                <RadioInputs 
                  key={index}
                  id={object.id} 
                  name={object["name"]} 
                  className={object["className"]} 
                  title={object["title"]}
                />
              )
          })
        }
      </div>
<hr/>
      <label>If Student, Name of School/College
        <input 
          type="text"
          name="school"
          value={data.school}
          onChange={handleChange}
          />
      </label>   
      <label>City
        <input 
          type="text"
          name="schoolCity"
          value={data.schoolCity}
          onChange={handleChange}
          />
      </label>   
      <label>State/Province
           <select 
            name="schoolStateProvince"
            value={data.schoolStateProvince}
            onChange={handleChange}>
            { stateSelect }
          </select>
      </label> 
      {
        schoolStatus.map((object, index) => {
          return (
            <RadioInputs
              key={index}
              id={object.id}
              name={object["name"]}
              className={object["className"]}
              title={object["title"]}
            />
          )
        })
      }
      <hr/>

      <label>Patient or Parent/Guardian's Employer
        <input 
          type="text"
          name="employerName"
          value={data.employerName}
          onChange={handleChange}
          />
      </label>
      <label>Work Phone
        <input 
          type="text"
          name="employerPhone"
          value={data.employerPhone}
          onChange={handleChange}
          />
      </label>
      <label>Business Address
        <input 
          type="text"
          name="employerAddress"
          value={data.employerAddress}
          onChange={handleChange}
          />
      </label>
      <label>Business City
        <input 
          type="text"
          name="employerCity"
          value={data.employerCity}
          onChange={handleChange}
          />
      </label>  
      <label>Business State / Province
           <select 
          name="employerStateProvince"
          value={data.employerStateProvince}
          onChange={handleChange}>
            { stateSelect }
            </select>
      </label>  
      <label>Business Zip Code
        <input 
          type="text"
          name="employerZipCode"
          value={data.employerZipCode}
          onChange={handleChange}
          />
      </label>  

    </div>
  )
}

export default PersonalInfo
