import React from "react";
import Card from "../components/Card.js";

const initialState = {
  number: "",
  name: "",
  expiry: "",
  CVC: "",
};

const AddCard = () => {
  const [type, setType] = React.useState("Visa");
  const [cardDetails, setCardDetails] = React.useState(initialState);
  const [front, setFront] = React.useState(true);
  const [errors, setErrors] = React.useState([]);

  return (
    <Card
      type={type}
      setCardDetails={setCardDetails}
      cardDetails={cardDetails}
      front={front}
      setFront={setFront}
      setType={setType}
      errors={errors}
      setErrors={setErrors}
    />
  );
};

export default AddCard;
