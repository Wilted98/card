import React from "react"
import { number } from "../utils/utils"
import "./Fields.css"

const Fields = ({ setFront, cardDetails, setCardDetails }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setCardDetails((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  return (
    <form className="forms__container" onSubmit={(e) => handleSubmit(e)}>
      <input
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault()
          }
        }}
        maxLength="16"
        value={cardDetails.number}
        onChange={(e) => handleChange(e)}
        name="number"
        placeholder="Card Number"
        className="input__field"
      />
      <input maxLength="24" placeholder="Name" name="name" value={cardDetails.name} onChange={(e) => handleChange(e)} className="input__field" />
      <div className="two__fields--cont">
        <input placeholder="Valid Thru" className="input__field" />
        <input onBlur={() => setFront(true)} onFocus={() => setFront((v) => !v)} placeholder="CVC" className="input__field" />
      </div>
      <button type="submit" value="Submit">
        Press me
      </button>
    </form>
  )
}

export default Fields
