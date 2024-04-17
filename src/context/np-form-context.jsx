import { createContext, useState, useEffect } from "react";

const npFormContext = createContext({});

export const NPFormProvider = ({children}) => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState({})
    const title = {
        0: 'Personal Info',
        1: 'Insurance Info',
        2: 'Medical Info',
        3: 'Credit Card Info'
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
    const canSubmit = true

/*     const canNextPage1 = Object.keys(data)
        .filter(key => keyStartsWith('bill') && key !== 'billAddress2')
        .map(key => data[key])
        .every(Boolean) */
    
    const disablePrev = page === 0

    const disableNext = (page === Object.keys(title).length -1) 
        
    const prevHide = page <= 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    return (
        <npFormContext.Provider value={{
            page,
            setPage,
            data,
            setData,
            title,
            handleChange,
            disablePrev,
            disableNext,
            prevHide,
            nextHide,
            submitHide,
            canSubmit
            }}>
        {children}
        </npFormContext.Provider>
    )
}

export default npFormContext
