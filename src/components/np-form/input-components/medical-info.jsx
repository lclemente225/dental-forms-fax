import React from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'

const MedicalInfo = () => {
  const {data, handleChange} = useNPFormContext()
  return (
    <div>
      Medical Info
    </div>
  )
}

export default MedicalInfo
