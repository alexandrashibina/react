export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const ADD_BANK_CARD = 'ADD_BANK_CARD';
export const SAVE_BANK_CARD = 'ADD_BANK_CARD';
export const REGISTER = 'REGISTER';
export const ADDRESS_LIST = 'ADDRESS_LIST';
export const SAVE_ADDRESS_LIST = 'SAVE_ADDRESS_LIST';
export const ROUTE = 'ROUTE';
export const SAVE_ROUTE = 'SAVE_ROUTE';

export const logIn = (token) => ({type: LOG_IN, payload: {token}});
export const logOut = () => ({type: LOG_OUT});

export const authenticate = (email, password) => ({
  type: AUTHENTICATE, 
  payload: {email, password},
});

export const addBankCard = (cardNumber, expiryDate, cardName, cvc) => ({
  type: ADD_BANK_CARD, 
  payload: {cardNumber, expiryDate, cardName, cvc},
});

export const saveBankCard = (cardNumber, expiryDate, cardName, cvc) => ({
  type: SAVE_BANK_CARD, 
  payload: {cardNumber, expiryDate, cardName, cvc},
});

export const registerUser = (email, password, name, surname) => ({
  type: REGISTER, 
  payload: {email, password, name, surname},
});

export const getRoute = (address1, address2) => ({
  type: ROUTE, 
  payload: {address1, address2},
});

export const saveRoute = (routes) => ({
  type: SAVE_ROUTE, 
  payload: routes,
});

export const getAddressList = () => ({
  type: ADDRESS_LIST,
});

export const saveAddressList = (addresses) => ({
  type: SAVE_ADDRESS_LIST,
  payload: addresses,
});