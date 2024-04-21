import React from 'react'
import useNPFormContext from '../../hooks/useNPFormContext';
import {PersonalInfo, MedicalInfo, InsuranceInfo, DentalHistory} from './input-components/index'


const NPFormInputs = () => {
    const {page} = useNPFormContext();

    const display = {
        0: <PersonalInfo />,
        1: <InsuranceInfo />,
        2: <MedicalInfo />,
        3: <DentalHistory />
    } 

  return (
    <>
      {display[page]}
    </>
  )
}

export default NPFormInputs
