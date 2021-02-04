import axios from "axios"; //делает encodeURIComponent по умолчанию + automatic transform to json

export const serverLogin = async (email, password) => {
  return axios(
    `http://loft-taxi.glitch.me/auth`, {
      params: {
        username: email,
        password: password,
      },
    }).then((response) => response.data.success);
};

export const addBankCard = async (cardNumber, expiryDate, cardName, cvc) => {
  // TODO: fix params
  return axios(
    `http://loft-taxi.glitch.me/card`, {
      method: 'post',
      params: {
        cardNumber: cardNumber, 
        expiryDate: expiryDate,
        cardName: cardName,
        cvc: cvc,
      }
    }
  ).then((response) => response.data.success);
};