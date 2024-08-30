import React from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'
import RenderJSONInputs from './form-components/render-json-inputs'
import { physicianInfo,generalMedicalQ, womenOnly, medicalConditionList } from './form-components/medical-info-form-inputs-json'

const MedicalInfo = () => {
  const {data, handleChange} = useNPFormContext()
  return (
    <div className='np-form-input-container'>
      <RenderJSONInputs arrayOfJson={physicianInfo}/>
      <RenderJSONInputs arrayOfJson={generalMedicalQ}/>
      <div className='np-form-input-container'>
      <h3>Women Only</h3>
      <RenderJSONInputs arrayOfJson={womenOnly}/>
      </div>
      <h3>Do you have any of the following?</h3>
      <div className='medical-conditions-list'>
      <RenderJSONInputs arrayOfJson={medicalConditionList}/>
      </div>
    </div>
  )
}

export default MedicalInfo
