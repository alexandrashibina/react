import { ADD_BANK_CARD, addBankCard } from "./actions";
import { saveBankCard } from "./api";

export const cardMiddleware = (store) => (next) => async (action) => {
  if(action.type === ADD_BANK_CARD) {
    const {cardNumber, expiryDate, cardName, cvc} = action.payload;
    const success = await saveBankCard(cardNumber, expiryDate, cardName, cvc)
    if (success) {
      store.dispatch(addBankCard())
    }
  } else {
    next(action)
  }
}