import React from "react"
import "./Home.css"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home__container">
      <span className="routes" onClick={() => navigate("/add-card")}>
        Add your cards
      </span>
      <span className="routes" onClick={() => navigate("/edit-cards")}>
        Edit your cards
      </span>
    </div>
  )
}

export default Home
