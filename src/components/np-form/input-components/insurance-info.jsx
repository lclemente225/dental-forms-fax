import {useState,useEffect} from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'
import TextInputs from '../../text-inputs'
import RadioInputs from '../../radio-inputs'

const InsuranceInfo = () => {
  const {data, handleChange} = useNPFormContext();

  function setAddress(){
      data.insuranceHolderEmployer = data.employerAddress;
      data.insuranceHolderCity = data.employerCity;
  }

  return (
    <div>
      Insurance Info (Confidential)
      <div>
          Is it the same address as the patient?
          <input type="checkbox" onClick={setAddress()}/>
      </div>
    </div>
  )
}

export default InsuranceInfo
