import React from 'react'

const ResponsibleParty = () => {
  return (
    <>
      <h2>Responsible Party</h2>
      <label>First Name
        <input 
          type="text"
          name="responsiblePersonFirstName"
          value={data.ResponsibleFirstName}
          onChange={handleChange}
          />
      </label>
      <label>Last Name
        <input 
          type="text"
          name="responsiblePersonLastName"
          value={data.ResponsibleLastName}
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
    </>
  )
}

export default ResponsibleParty
