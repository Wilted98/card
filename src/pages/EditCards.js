import React from "react"
import { useNavigate } from "react-router-dom"
import "./EditCards.css"

const EditCards = () => {
  const [cards, setCards] = React.useState()
  const navigate = useNavigate()

  React.useEffect(() => {
    let array = JSON.parse(localStorage.getItem("cards")) || []
    if (window) {
      setCards(JSON.parse(localStorage.getItem("cards")))
    }
    console.log(array)
  }, [])

  const deleteCard = (index) => {
    let array = JSON.parse(localStorage.getItem("cards")) || []
    array.splice(index, 1)
    localStorage.setItem("cards", JSON.stringify(array))
    setCards(array)
  }

  const soryByCardType = (type) => {
    let array = JSON.parse(localStorage.getItem("cards")) || []
    if (type === "visa" && array.length > 0) {
      setCards(array.filter((i) => i.type === "visa"))
    } else if (type === "master" && array.length > 0) {
      setCards(array.filter((i) => i.type === "mastercard"))
    } else if (type === "all" && array.length > 0) {
      setCards(array)
    }
  }

  const sortByExpiry = (type) => {
    let array = JSON.parse(localStorage.getItem("cards")) || []
    if (type === "asc") {
      array.sort((a, b) => {
        if (a.expiry.substring(2) === b.expiry.substring(2)) {
          if (a.expiry.substring(0, 2) > b.expiry.substring(0, 2)) {
            return a.expiry - b.expiry
          } else {
            return b.expiry - a.expiry
          }
        } else {
          return a.expiry.substring(2) - b.expiry.substring(2)
        }
      })
      setCards(array)
    } else if (type === "desc") {
      array.sort((a, b) => {
        if (a.expiry.substring(2) === b.expiry.substring(2)) {
          if (a.expiry.substring(0, 2) > b.expiry.substring(0, 2)) {
            return b.expiry - a.expiry
          } else {
            return a.expiry - b.expiry
          }
        } else {
          return b.expiry.substring(2) - a.expiry.substring(2)
        }
      })
      setCards(array)
    }
  }

  return (
    <div className="edit__page">
      <div className="edit__container">
        <div className="dropdown__cont">
          <span>Sort by: </span>
          <div className="dropdown">
            <button className="dropbtn">Card</button>
            <div className="dropdown-content">
              <span onClick={() => soryByCardType("visa")}>Visa</span>
              <span onClick={() => soryByCardType("master")}>mastercard</span>
              <span onClick={() => soryByCardType("all")}>Show all</span>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Expiry</button>
            <div className="dropdown-content">
              <span onClick={() => sortByExpiry("asc")}>Ascending</span>
              <span onClick={() => sortByExpiry("desc")}>Descending</span>
            </div>
          </div>
        </div>
        <div className="cards__map">
          {cards?.length > 0 ? (
            <div className="card__details--cont">
              {cards.map((card, index) => {
                const { name, number, expiry, CVC, type } = card
                return (
                  <div key={index} className="card__info">
                    <span className="card__type--cont"> {type !== "" ? type : "default"}</span> <span className="card__number--cont">***{number.substring(number.length - 4)}</span>
                    <span onClick={() => deleteCard(index)} className="delete__card--btn">
                      remove
                    </span>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="no__card--info">
              You don't have any card added! <br /> Click <span onClick={() => navigate("/add-card")}>here</span> to add one!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EditCards
