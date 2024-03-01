import React, {useState} from 'react'
import './covid-consent.css'
const CovidConsent = () => {
    const [formData, setFormData] = useState({})

    function handleCovidForm(e){
        if(e.target.type === 'checkbox'){
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked
            })
        }else{
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }

    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("submit formData", formData)
        //on submit then email 
    }

    return (
    <div className='form-container'>
        <form className='form' onChange={handleCovidForm}>
            <h2>COVID-19 Screening Consent Form</h2>
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

            <button onClick={handleSubmit} className='form-submit-button'>
                Submit Form
            </button>
        </form>
    </div>
    )
}

export default CovidConsent

/*
add 2 apis
1. fax send api
2. pdf creation api
need to save as a pdf and then fax pdf to mom
*/