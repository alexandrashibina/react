import cardReducer from './cardReducer';
import {addBankCard} from '../actions';

describe("cardReducer", () => {
  describe("ADD_BANK_CARD", () => {
    it('should create an action with ADD_BANK_CARD', () => {
      const value = {
        cardNumber: "2000 0000 0000 0000",
        expiryDate: "01/21",
        cardName: "TEST",
        cvc: "123"
      };

      const expectation = {
        cardAdded: true,
        ...value,
      };

      expect(
        cardReducer(
          {}, 
          addBankCard(
            value.cardNumber, 
            value.expiryDate, 
            value.cardName, 
            value.cvc
          )
        )
      ).toStrictEqual(expectation);
    });
  });
});