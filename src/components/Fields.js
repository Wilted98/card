import React from "react";
import { number } from "../utils/utils";
import "./Fields.css";

const Fields = ({
  setFront,
  cardDetails,
  setCardDetails,
  type,
  errors,
  setErrors,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (window) {
      let array = JSON.parse(localStorage.getItem("cards")) || [];
      array.push({ ...cardDetails, type });
      localStorage.setItem("cards", JSON.stringify(array));
    }
  };

  const handleChange = (e) => {
    setCardDetails((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  return (
    <form className="forms__container" onSubmit={(e) => handleSubmit(e)}>
      <input
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        maxLength="16"
        value={cardDetails.number}
        onChange={(e) => handleChange(e)}
        name="number"
        placeholder="Card Number"
        className="input__field"
        onBlur={() =>
          cardDetails.number < 16 &&
          setErrors((err) => [
            ...err,
            { err: "The card must have 16 numbers!" },
          ])
        }
      />
      <input
        placeholder="Name"
        name="name"
        value={cardDetails.name}
        onChange={(e) => handleChange(e)}
        className="input__field"
      />
      <div className="two__fields--cont">
        <input
          placeholder="Valid Thru"
          name="expiry"
          maxLength="4"
          value={cardDetails.expiry}
          onChange={(e) => handleChange(e)}
          className="input__field"
          onBlur={() =>
            cardDetails.expiry < 4 &&
            setErrors((err) => [...err, { err: "Select a valid date!" }])
          }
        />
        <input
          onFocus={() => setFront((v) => !v)}
          name="CVC"
          maxLength="5"
          value={cardDetails.CVC}
          onChange={(e) => handleChange(e)}
          placeholder="CVC"
          className="input__field"
          onBlur={() => {
            setFront(true);
            cardDetails.CVC < 3 &&
              setErrors((err) => [
                ...err,
                { err: "The CVC must be at least 3 numbers!" },
              ]);
          }}
        />
      </div>
      <button className="save__button" type="submit" value="Submit">
        Save
      </button>
    </form>
  );
};

export default Fields;
