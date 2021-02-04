import { ADD_BANK_CARD } from "./actions";
import { addBankCard } from "./api";

export const cardMiddleware = (store) => (next) => async (action) => {
  if(action.type === ADD_BANK_CARD) {
    const {cardNumber, expiryDate, cardName, cvc} = action.payload;
    const success = await addBankCard(cardNumber, expiryDate, cardName, cvc)
    if (success) {
      store.dispatch(addBankCard())
    }
  } else {
    next(action)
  }
}