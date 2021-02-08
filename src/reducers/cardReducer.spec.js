import cardReducer from './cardReducer';
import {addBankCard, ADD_BANK_CARD} from '../actions';

describe("cardReducer", () => {
  describe("ADD_BANK_CARD", () => {
    it('should create an action with ADD_BANK_CARD', () => {
        const value = {
            cardNumber: "0000 0000 0000 0000", 
            expiryDate: "00/00", 
            cardName: "Test Test", 
            cvc: "000"            
        };

        const expectation = {
            type: ADD_BANK_CARD,
            payload: value,
        }

        expect(cardReducer({}, addBankCard(value))).toEqual(expectation)
    })
  })
})