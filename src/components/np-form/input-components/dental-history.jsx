import useNPFormContext from "../../../hooks/useNPFormContext"
import RenderJSONInputs from "./form-components/render-json-inputs"
import { dentalHistoryList, jawProblems, prevDentist } from "./form-components/dental-info-form-inputs-json"

const DentalHistory = () => {
  const {data, handleChange} = useNPFormContext()
  return (
    <div className="np-form-input-container">
      <RenderJSONInputs arrayOfJson={prevDentist}/>
      <div className="medical-conditions-list">
      <RenderJSONInputs arrayOfJson={dentalHistoryList}/>
      </div>
      <h3>Have you ever experienced any of the following problems in your jaw?</h3>
      <RenderJSONInputs arrayOfJson={jawProblems}/>
    </div>
  )
}

export default DentalHistory
