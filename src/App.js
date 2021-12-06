import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddCard from "./pages/AddCard"
import Error from "./pages/Error"
import EditCards from "./pages/EditCards"

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/add-card" element={<AddCard />} />
      <Route exact path="/edit-cards" element={<EditCards />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
