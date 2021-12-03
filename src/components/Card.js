import React from "react"
import chip from "../assets/chip.svg"
import "./Card.css"
import Fields from "./Fields"
import { number, expiry } from "../utils/utils"

const Card = ({ cardDetails, front, type, setFront, setCardDetails }) => {
  return (
    <div className="landing__page">
      <div className="card__fields--container">
        {/* Card Container */}

        <div className="card__container">
          <div className={`${!front && "flip__animation--card"} flip-card-inner`}>
            {/* Front Card */}
            <div className="flip-card-front">
              {/* Chip and Card Type Div */}
              <div className="space__around">
                <div className="centered">
                  <img className="chip__img" src={chip} alt="chip" />
                  <div className="credit-card--type">{type}</div>
                </div>
              </div>
              {/* Credit Card Number */}
              <div className="space__around">
                <div className="centered">
                  <span className="card__number">{number(cardDetails)}</span>
                </div>
              </div>
              {/* Name and Valid Thru Div */}
              <div className="space__around">
                <div className="centered">
                  <div className="user__name">{cardDetails.name}</div>
                  <div className="validity__cont">
                    <span className="validity__text">valid thru</span>
                    <span className="validity__date">22</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Back Card */}
            <div className="flip-card-back">
              <div className="black__div" />
              <div className="cvc__container">
                <span className="cvc__orange--line" />
                <span className="cvc__orange--line" />
                <span className="cvc__orange--line" />
              </div>
            </div>
          </div>
        </div>

        {/* Fields Container */}
        <Fields setFront={setFront} cardDetails={cardDetails} setCardDetails={setCardDetails} />
      </div>
    </div>
  )
}

export default Card
