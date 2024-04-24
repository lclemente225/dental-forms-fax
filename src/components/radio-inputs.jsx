import React from 'react'
import useNPFormContext from '../hooks/useNPFormContext'

const RadioInputs = (props) => {
  return (
    <>
      <label htmlFor={props.id} className={props.className}> 
          <input type="radio" id={props.id} name={props.name} value={props.id}/>
          <span className="checkmark"/>
          {props.title}
        </label>
    </>
  )
}

export default RadioInputs
