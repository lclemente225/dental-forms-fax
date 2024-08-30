import useNPFormContext from "../../hooks/useNPFormContext"
import NPFormInputs from "./np-form-inputs";
import './npForm.css'

const NPForm = () => {

    const {
      page, 
      setPage, 
      data, 
      title, 
      handleChange, 
      disablePrev, 
      disableNext, 
      prevHide, 
      nextHide,
      submitHide,
      canSubmit 
    } = useNPFormContext();
    
    function handleSubmit(e){
    e.preventDefault()
    console.log("submit formData", data)
    //on submit then email or fax
    }

    function handlePrev(e){
      e.preventDefault()
      setPage(prev => prev-=1)
      console.log("previous ", page)
    }

    function handleNext(e){
      e.preventDefault()
      setPage(prev => prev+=1)
      console.log("next ", page)
    }

    return (
      <div className='form-container'>
        <form className='form' onChange={handleChange}>
          <h2>{title[page]}</h2>
          <div className="button-container">
            <button className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>
              Prev
            </button>
            <button className={`button ${nextHide}`} onClick={handleNext} disabled={disableNext}>
              Next
            </button>
            <button onClick={handleSubmit} className={`form-submit-button ${submitHide}`} disabled={!canSubmit}>
                Submit Form
            </button>
          </div>
          <NPFormInputs/>
        </form>
      </div>
    )
}

export default NPForm
