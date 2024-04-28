import React from 'react'
import useNPFormContext from '../hooks/useNPFormContext'


const TextInputs = (props) => {
    const {data, handleChange} = useNPFormContext()
    let value = data[props.name];
  return (
    <>
      <label>{props.title} 
        <input 
          type={props.type ? props.type : 'text'}
          name={props.name}
          value={value}
          pattern={props.pattern && props.pattern}
          onChange={handleChange}
          onInvalid={() => "Please put correct format"}
          {...(props.required ? { required: true } : {})}
          />
      </label>
    </>
  )
}

export default TextInputs
