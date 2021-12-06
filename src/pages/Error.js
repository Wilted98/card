import React from "react"
import "./Error.css"
import gif from "../assets/404.gif"
import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/")
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="error__page">
      <img src={gif} alt="404" />
    </div>
  )
}

export default Error
