import axios from "axios"; //делает encodeURIComponent по умолчанию + automatic transform to json

export const serverLogin = async (email, password) => {
  return axios({
    method: 'post',
    url: 'http://loft-taxi.glitch.me/auth',
    data: {
      email: email,
      password: password,
    },
  }).then((response) => response.data);
};

export const serverReg = async (email, password, name, surname) => {
  return axios(
    'http://loft-taxi.glitch.me/register', {
      method: 'post',
      data: {
        email: email,
        password: password,
        name: name,
        surname: surname,
      },
    }).then((response) => response.data);
};

export const saveBankCard = async (cardNumber, expiryDate, cardName, cvc) => {
  // TODO: fix params
  return axios(
    'http://loft-taxi.glitch.me/card', {
      method: 'post',
      data: {
        cardNumber: cardNumber, 
        expiryDate: expiryDate,
        cardName: cardName,
        cvc: cvc,
      }
    }).then((response) => response.data);
};

export const route = async (address1, address2) => {
  return axios(
    'http://loft-taxi.glitch.me/route', {
      method: 'GET',
      params: {
        address1: address1,
        address2: address2,
      },
    }).then((response) => response.data);
};

export const fetchAddressList = async () => {
  return axios({
    method: 'get',
    url:'http://loft-taxi.glitch.me/addressList'
  })
  .then((response) => response.data);
};