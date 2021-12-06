import React from "react"
import { number } from "../utils/utils"
import "./Fields.css"
import { useNavigate } from "react-router-dom"

const Fields = ({ setFront, cardDetails, setCardDetails, type, errors, setErrors }) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    let localErr = false
    if (errors.length > 0) return
    if (cardDetails.number.length < 16) {
      setErrors((err) => [...err, { err: "The card must have 16 numbers!" }])
      localErr = true
    }
    if (cardDetails.name.length < 2) {
      setErrors((err) => [...err, { err: "Please enter a valid name!" }])
      localErr = true
    }
    if (cardDetails.expiry.length < 4) {
      setErrors((err) => [...err, { err: "Please enter a valid date!" }])
      localErr = true
    }
    if (cardDetails.CVC.length < 3) {
      setErrors((err) => [...err, { err: "The CVC must have at least 3 numbers!" }])
      localErr = true
    }

    if (window && !localErr) {
      let array = JSON.parse(localStorage.getItem("cards")) || []
      array.push({ ...cardDetails, type })
      localStorage.setItem("cards", JSON.stringify(array))
      setCardDetails({
        number: "",
        name: "",
        expiry: "",
        CVC: "",
      })
      navigate("/")
    }
  }

  const handleChange = (e) => {
    setErrors([])
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
      <input
        onKeyPress={(event) => {
          if (!/[A-Za-z_ ]/.test(event.key)) {
            event.preventDefault()
          }
        }}
        placeholder="Name"
        name="name"
        value={cardDetails.name}
        onChange={(e) => handleChange(e)}
        className="input__field"
      />
      <div className="two__fields--cont">
        <input
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault()
            }
          }}
          placeholder="Valid Thru"
          name="expiry"
          maxLength="4"
          value={cardDetails.expiry}
          onChange={(e) => handleChange(e)}
          className="input__field"
        />
        <input
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault()
            }
          }}
          onFocus={() => setFront((v) => !v)}
          name="CVC"
          maxLength="5"
          value={cardDetails.CVC}
          onChange={(e) => handleChange(e)}
          placeholder="CVC"
          className="input__field"
          onBlur={() => {
            setFront(true)
          }}
        />
      </div>
      <button className="save__button" type="submit" value="Submit">
        Save
      </button>
    </form>
  )
}

export default Fields
