import React from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'
import states from './states'

const PersonalInfo = () => {
  const {data, handleChange} = useNPFormContext()
  return (
    <div className="np-form-input-container">
      <h2>Patient Information (Confidential)</h2>
      <label>First Name
        <input 
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          />
      </label>
      <label>Last Name
        <input 
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          />
        </label>

      <label>Address
        <input 
          type="text"
          name="address"
          value={data.address}
          onChange={handleChange}
          />
      </label>
      <label>City
        <input 
          type="text"
          name="city"
          value={data.city}
          onChange={handleChange}
          />
      </label>
      <label>Zip Code
        <input 
          type="text"
          name="zipCode"
          value={data.zipCode}
          onChange={handleChange}
          />
      </label>
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
          
      <h3>Check appropriate box</h3>
      <div className='marital-status-inputs-container'>
        <label htmlFor="minor">
          <input type="radio" id="minor" name="marital-status" value="minor"/>
          <span className="checkmark"/>
          Minor
        </label>
        <label htmlFor="single"> 
        <input type="radio" id="single" name="marital-status" value="single"/>
          <span className="checkmark"/>
          Single
        </label>
        <label htmlFor="married"> 
          <input type="radio" id="married" name="marital-status" value="married"/>
          <span className="checkmark"/>
          Married
        </label>
        <label htmlFor="divorced">
          <input type="radio" id="divorced" name="marital-status" value="divorced"/>
          <span className="checkmark"/>
          Divorced
        </label>
        <label htmlFor="widowed">
          <input type="radio" id="widowed" name="marital-status" value="widowed"/>
          <span className="checkmark"/>
          Widowed
        </label>
        <label htmlFor="separated"> 
          <input type="radio" id="separated" name="marital-status" value="separated"/>
          <span className="checkmark"/>
          Separated
        </label>
      </div>

    </div>
  )
}

export default PersonalInfo
