import React from "react";
import chip from "../assets/chip.svg";
import "./Card.css";
import Fields from "./Fields";
import { number, expiry, name } from "../utils/utils";
import images from "../utils/images";

const Card = ({
  cardDetails,
  front,
  type,
  setFront,
  setCardDetails,
  setType,
  errors,
  setErrors,
}) => {
  return (
    <div className="landing__page">
      <div className="card__fields--container">
        {/* Card Container */}

        <div className="card__container">
          <div
            className={`${!front && "flip__animation--card"} flip-card-inner`}
          >
            {/* Front Card */}
            <div
              className={`${
                type === "visa" ? "visa" : type === "master" && "master"
              } flip-card-front `}
            >
              {/* Chip and Card Type Div */}
              <div className="space__around">
                <div className="centered">
                  <img className="chip__img" src={chip} alt="chip" />
                  <div className="credit-card--type">
                    {type === "master" ? (
                      <img src={images.mastercard} alt="master" />
                    ) : (
                      type === "visa" && <img src={images.visa} alt="visa" />
                    )}
                  </div>
                </div>
              </div>
              {/* Credit Card Number */}
              <div className="space__around">
                <div className="centered">
                  <span
                    style={{ color: type && "#fff" }}
                    className="card__number"
                  >
                    {number(cardDetails, setType)}
                  </span>
                </div>
              </div>
              {/* Name and Valid Thru Div */}
              <div className="space__around">
                <div className="centered">
                  <div style={{ color: type && "#fff" }} className="user__name">
                    {name(cardDetails)}
                  </div>
                  <div className="validity__cont">
                    <span className="validity__text">valid thru</span>
                    <span
                      style={{ color: type && "#fff" }}
                      className="validity__date"
                    >
                      {expiry(cardDetails)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Back Card */}
            <div
              className={`${
                type === "visa" ? "visa" : type === "master" && "master"
              } flip-card-back `}
            >
              <div className="black__div" />
              <div className="cvc__container">
                <span className="cvc__orange--line" />
                <span className="cvc__orange--line" />
                <span className="cvc__orange--line" />
                <span className="cvc__value">{cardDetails.CVC}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Errors Container */}
        {errors.length > 0 && (
          <div className="errors__container">
            {errors.map((arg, i) => {
              return (
                <span key={i} className="error__span">
                  * {arg.err}
                </span>
              );
            })}
          </div>
        )}

        {console.log(errors, "da")}

        {/* Fields Container */}
        <Fields
          setFront={setFront}
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          type={type}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
    </div>
  );
};

export default Card;
