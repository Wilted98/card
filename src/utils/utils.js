export const expiry = (cardDetails) => {
  if (cardDetails.expiry === "") {
    return "••/••"
  } else {
    var expiry = cardDetails.expiry.toString()

    const expiryMaxLength = 4

    if (expiry.match(/\//)) expiry = expiry.replace("/", "")

    if (!expiry.match(/^[0-9]*$/)) return "••/••"

    while (expiry.length < 4) {
      expiry += "•"
    }

    expiry = expiry.slice(0, 2) + "/" + expiry.slice(2, expiryMaxLength)
  }

  return expiry
}

export const number = (cardDetails) => {
  let string = ""
  if (!cardDetails.number) {
    string = ""
  } else {
    string = cardDetails.number.toString()
  }

  const maxLength = 16

  if (string.length > maxLength) string = string.slice(0, maxLength)

  while (string.length < maxLength) {
    string += "*"
    //"•"
  }

  const amountOfSpaces = Math.ceil(maxLength / 4)

  for (var i = 1; i <= amountOfSpaces; i++) {
    var space_index = i * 4 + (i - 1)
    string = string.slice(0, space_index) + " " + string.slice(space_index)
  }

  return string
}
