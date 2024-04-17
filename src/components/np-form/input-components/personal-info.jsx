import React from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'
import states from './states'

const PersonalInfo = () => {
  const {data, handleChange} = useNPFormContext()
  return (
    <div className="np-form-input-container">
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
              states.map((object) => {
                return (<option value={object.name}>{object.abbreviation}</option>)
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
    </div>
  )
}

export default PersonalInfo
