import { createContext, useState, useEffect } from "react";

import React from 'react'

const npFormContext = createContext({});

const NPFormProvider = ({children}) => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState()
    const title = {
        0: 'Billing Info',
        1: 'Insurance Info',
        2: 'Medical Info'
    }
    //add handleChange fn
    //can destructure data here E.G. data.billingInfo1
    function handleChange(e){
        if(e.target.type === 'checkbox'){
            setData(prev => ({
                ...prev,
                [e.target.name]: e.target.checked
            }))
        }else{
            setData(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
        }
    }

    const canNextPage1 = Object.keys(data)
        .filter(key => keystartsWith('bill') && key !== 'billAddress2')
        .map(key => data[key])
        .every(Boolean)

    const disableNext = (page ===Object.keys(title).length -1) ||
        (page === 0 && !canNextPage1)
        
  return (
    <npFormContext.Provider value={{page, setPage, data, setData, title, handleChange}}>
      {children}
    </npFormContext.Provider>
  )
}

export default npFormContext
