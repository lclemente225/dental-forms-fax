import CovidConsent from './components/covid-consent/covid-consent'
import NPForm from './components/np-form/np-form'
import './App.css'

function App() {

  return (
    <>
    <CovidConsent />
    </>
  )
}

export default App
/**
 
1. home page
2. covid consent form
    2 pages
3. new patient form
    4 pages
4. at the bottom put canvas signature
5. use pdf library to put all form data onto a pdf
6. fax api to mom's fax

Each form has submit function 
  - for now email pdf form to joyplace15@gmail.com
  - endgame perhaps submitting will:
      1. create pdf
      2. fax to mom
 */
