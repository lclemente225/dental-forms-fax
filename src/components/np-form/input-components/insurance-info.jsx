import React from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'

const InsuranceInfo = () => {
  const {data, handleChange} = useNPFormContext()
  return (
    <div>
      Insurance Info
    </div>
  )
}

export default InsuranceInfo
