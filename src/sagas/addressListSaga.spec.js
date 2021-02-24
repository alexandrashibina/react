import { addressListSaga, addressSaga } from './addressListSaga';
import { takeEvery } from 'redux-saga/effects';

jest.mock("../api", () => ({fetchAddressList: jest.fn(() => true) }));


describe ('paymentSaga', () => {
    const genObject = addressListSaga();

    it('should wait for ADDRESS_LIST action and call addressSaga', () => {
        expect(genObject.next().value)
        .toEqual(takeEvery('ADDRESS_LIST', addressSaga));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
      });

});