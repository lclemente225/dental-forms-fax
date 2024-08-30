import {useState,useEffect} from 'react'
import useNPFormContext from '../../../hooks/useNPFormContext'
import RenderJSONInputs from './form-components/render-json-inputs'
import { insuredPatientInfo, primaryInsurance1,primaryInsuranceEmployerInfo, primaryInsuranceInfo, secondaryInsuranceInfo } from './form-components/insurance-info-form-inputs-json'
import states from './form-components/states'
import RadioInputs from '../../radio-inputs'

const InsuranceInfo = () => {
  const {data, handleChange} = useNPFormContext();
  const [addressState, addressStateSet] = useState(false)
  const [secondaryInsState, secondaryInsStateSet] = useState(false)
  const stateSelect = states.map((object, index) => {
    return (<option key={index} value={object.name}>{object.abbreviation}</option>)
  })

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
      <h3>Primary Insurance Info</h3>
      <div style={{display:'flex',gap:'4px'}}>
          Does the insurance holder have the employer as the patient?
          <input type="checkbox" onClick={(e) => {
            addressStateSet((x) => !x)
            setAddress(e)
            }}/>
      </div>
      <div className='np-form-input-container'>
      <RenderJSONInputs arrayOfJson={primaryInsurance1}/>
            
      {
      !addressState && (<>
      <h3>Patient Info</h3>
      <RenderJSONInputs arrayOfJson={insuredPatientInfo}/>
      </>) 
      }
      </div>
      <div className="np-form-input-container">
      <RenderJSONInputs arrayOfJson={primaryInsuranceInfo}/>
      <label>State
        <select 
          className='stateStyle'
          name="InsEmployerState"
          value={data.InsEmployerState}
          onChange={handleChange}>
            { stateSelect }
        </select>
      </label>
      </div>

      <div style={{display:'flex',gap:'4px'}}>
          Do you have a secondary insurance?
          <input type="checkbox" onClick={(e) => {
            secondaryInsStateSet((x) => !x)
            }}
            placeholder='wat'
            />
      </div>
      {
        secondaryInsState &&
        <div  className='np-form-input-container'>
          <h3>Secondary Insurance Info</h3>
          <RenderJSONInputs arrayOfJson={secondaryInsuranceInfo}/>
        </div>
      }


    </div>
  )
}

export default InsuranceInfo
