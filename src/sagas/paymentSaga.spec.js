import { paymentSaga, savePaymentSaga } from './paymentSaga';
import { takeEvery } from 'redux-saga/effects';

jest.mock("../api", () => ({saveBankCard: jest.fn(() => true) }));


describe ('paymentSaga', () => {
    const genObject = paymentSaga();

    it('should wait for every ADD_BANK_CARD action and call savePaymentSaga', () => {
        expect(genObject.next().value)
        .toEqual(takeEvery('ADD_BANK_CARD', savePaymentSaga));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
      });

});