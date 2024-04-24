import React from 'react'
import useNPFormContext from '../../../../hooks/useNPFormContext'


const TextInputs = (props) => {
    const {data, handleChange} = useNPFormContext()
    let value = data[props.name];
  return (
    <>
      <label>{props.title}
        <input 
          type="text"
          name={props.name}
          value={value}
          onChange={handleChange}
          />
      </label>  
    </>
  )
}

export default TextInputs
