import React from "react"
import "./App.css"
import chip from "./assets/chip.svg"

const App = () => {
  return (
    <div className="landing__page">
      <div className="card__fields--container">
        {/* Card Container */}

        <div className="card__container">
          <img src={chip} style={{ width: "1rem", height: "1rem" }} />
        </div>

        {/* Fields Container */}
      </div>
    </div>
  )
}

export default App
