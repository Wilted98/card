import React from "react"
import "./App.css"
import Card from "./components/Card.js"

const initialState = {
  number: "",
  name: "YOUR NAME HERE",
  expiry: "222",
  CVC: "",
}

const App = () => {
  const [type, setType] = React.useState("Visa")
  const [cardDetails, setCardDetails] = React.useState(initialState)
  const [front, setFront] = React.useState(true)

  return <Card type={type} setCardDetails={setCardDetails} cardDetails={cardDetails} front={front} setFront={setFront} />
}

export default App
