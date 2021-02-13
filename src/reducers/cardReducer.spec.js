import cardReducer from './cardReducer';
import {addBankCard, ADD_BANK_CARD} from '../actions';

describe("cardReducer", () => {
  describe("ADD_BANK_CARD", () => {
    it('should create an action with ADD_BANK_CARD', () => {
      const value = (cardNumber, expiryDate, cardName, cvc);

      const expectation = {
          type: ADD_BANK_CARD,
          payload: value,
      }

        expect(cardReducer({}, addBankCard(value))).toEqual(expectation)
    })
  })
})