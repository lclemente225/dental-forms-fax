import useNPFormContext from "../../hooks/useNPFormContext"

const NPForm = () => {

  const {
    page, setPage, data, setData, title
  } = useNPFormContext();

  function handleSubmit(e){
  e.preventDefault()
  console.log("submit formData", formData)
  //on submit then email 
  }

  function handlePrev(){
    setPage(prev => prev-1)
  }

  function handleNext(){
    setPage(prev => prev+1)
  }

  return (
    <div className='form-container'>
      <form className='form' onChange={handleCovidForm}>
        <h2>{title[page]}</h2>

        <label>Name</label>
        <input type="text" name="name" className='form-input'/>

        <label>Date</label>
        <input type="date" name="date" className='form-input'/>
        
        <label>Phone Number</label>
        <input type="text" name="phone" className='form-input'/>
        
        <label>
            You have not tested positive for COVID-19 in the past 14 days.
            <input type="checkbox" name="covidPositive" className='form-input'/>
        </label>

        <label>
            You have not been on a flight in the past 14 days.
            <input type="checkbox" name="flightCheck" className='form-input'/>
        </label>

        <label>
            You do not have any covid symptoms such as fever, cough, or shortness of breath.
            <input type="checkbox" name="symptoms" className='form-input'/>
        </label>

        <div>
            Sign Here
        </div>
        <div className="button-container">
          <button className="button" onClick={handlePrev}>Prev</button>
          <button className="button" onClick={handleNext}>Next</button>
          <button onClick={handleSubmit} className='form-submit-button'>
              Submit Form
          </button>
        </div>
      </form>
    </div>
  )
}

export default NPForm
