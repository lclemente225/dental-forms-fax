import React from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'
import RenderJSONInputs from './render-json-inputs'
import responsibleParty from './personal-info-form-inputs-json'

const ResponsibleParty = () => {
    const {data, handleChange} = useNPFormContext()
  return (
    <>
      <h2>Responsible Party</h2>
      <RenderJSONInputs arrayOfJson={responsibleParty}/>
      <label>State
        <select 
          name="state"
          value={data.state}
          onChange={handleChange}>
            {
              states.map((object, index) => {
                return (<option key={index} value={object.name}>{object.abbreviation}</option>)
              })
            }
          </select>
      </label>
      <label>Phone Number
        <input 
          type="tel"
          name="phoneNum"
          value={data.phoneNumber}
          onChange={handleChange}
          />
      </label>
    </>
  )
}

export default ResponsibleParty
