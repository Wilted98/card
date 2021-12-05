export const expiry = (cardDetails) => {
  if (cardDetails.expiry === "") {
    return "••/••";
  } else {
    var expiry = cardDetails.expiry.toString();

    const expiryMaxLength = 4;

    if (expiry.match(/\//)) expiry = expiry.replace("/", "");

    if (!expiry.match(/^[0-9]*$/)) return "••/••";

    while (expiry.length < 4) {
      expiry += "•";
    }

    expiry = expiry.slice(0, 2) + "/" + expiry.slice(2, expiryMaxLength);
    return expiry;
  }
};

export const number = (cardDetails, setType) => {
  let string = "";
  if (!cardDetails.number) {
    string = "";
  } else {
    string = cardDetails.number.toString();
  }

  let maxLength = 16;

  if (string.match(/^4/)) {
    setType("visa");
  } else if (
    string.match(/^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/)
  ) {
    setType("master");
  } else {
    setType("");
  }

  if (string.length > maxLength) string = string.slice(0, maxLength);

  while (string.length < maxLength) {
    string += "*";
    //"•"
  }

  const amountOfSpaces = Math.ceil(maxLength / 4);

  for (var i = 1; i <= amountOfSpaces; i++) {
    var space_index = i * 4 + (i - 1);
    string = string.slice(0, space_index) + " " + string.slice(space_index);
  }

  return string;
};

export const name = (cardDetails) => {
  if (cardDetails.name === "") {
    return "YOUR NAME HERE";
  } else {
    return cardDetails.name.toUpperCase();
  }
};
