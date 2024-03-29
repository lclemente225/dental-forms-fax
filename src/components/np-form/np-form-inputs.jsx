import React from 'react'
import useNPFormContext from '../../hooks/useNPFormContext';
import {PersonalInfo, MedicalInfo, InsuranceInfo, CreditCardInfo} from './input-components/index'

const NPFormInputs = () => {
    const {page} = useNPFormContext();

    const display = {
        0: <PersonalInfo />,
        1: <MedicalInfo />,
        2: <InsuranceInfo />,
        3: <CreditCardInfo />
    } 

  return (
    <div>
      {display[page]}
    </div>
  )
}

export default NPFormInputs
