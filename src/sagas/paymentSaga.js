import { ADD_BANK_CARD, addBankCard } from "../actions";
import { saveBankCard } from "../api";
import {takeEvery, call, put} from 'redux-saga/effects';


export function* savePaymentSaga(action) {
    const {cardNumber, expiryDate, cardName, cvc} = action.payload;
    const success = yield call(saveBankCard, cardNumber, expiryDate, cardName, cvc)
    if (success) {
        yield put(addBankCard())
    }
}

export function* paymentSaga() {
    yield takeEvery(ADD_BANK_CARD, savePaymentSaga)
}