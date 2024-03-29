import React from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'

const PersonalInfo = () => {
  const {data, handleChange} = useNPFormContext()
  return (
    <div>
      Personal Info
    </div>
  )
}

export default PersonalInfo
