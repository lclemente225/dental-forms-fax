import useNPFormContext from "../../../hooks/useNPFormContext"

const CreditCardInfo = () => {
  const {data, handleChange} = useNPFormContext()
  return (
    <div>
      Credit Card Info
    </div>
  )
}

export default CreditCardInfo
