import {useContext} from 'react'
import npFormContext from '../context/np-form-context'

const useNPFormContext = () => {
  return useContext(npFormContext)
}

export default useNPFormContext
