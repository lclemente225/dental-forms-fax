import {useState,useEffect} from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'
import RenderJSONInputs from './form-components/render-json-inputs'
import { primaryInsurance1,primaryInsuranceEmployerInfo, primaryInsuranceInfo } from './form-components/insurance-info-form-inputs-json'

const InsuranceInfo = () => {
  const {data, handleChange} = useNPFormContext();
  const [addressState, addressStateSet] = useState(false)

  function setAddress(e){
      console.log("setting address",e.checked)
      if(addressState){
      data.insuranceHolderEmployer = data.employerAddress;
      data.insuranceHolderCity = data.employerCity;
      }else{
        data.insuranceHolderEmployer = "";
        data.insuranceHolderCity = "";
      }
    }

  return (
    <div>
      Insurance Info (Confidential)
      <div style={{display:'flex',flexDirection:'column'}}>
          Is it the same address as the patient?
          <input type="checkbox" onClick={(e) => {
            addressStateSet((x) => !x)
            setAddress(e)}}/>
          {!addressState && <RenderJSONInputs arrayOfJson={primaryInsurance1}/>}
      </div>
      <hr style={{height:'10px',outline:'2px solid red', margin:'50px 0'}}/>
      <RenderJSONInputs arrayOfJson={primaryInsuranceInfo}/>
      <RenderJSONInputs arrayOfJson={primaryInsuranceEmployerInfo}/>
    </div>
  )
}

export default InsuranceInfo
