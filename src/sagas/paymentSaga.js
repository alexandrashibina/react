import { ADD_BANK_CARD, addBankCard } from "../actions";
import { saveBankCard } from "../api";
import {takeEvery, call, put} from 'redux-saga/effects';


export function* savePaymentSaga(action) {
    const {cardNumber, expiryDate, cardName, cvc} = action.payload;
    const data = yield call(saveBankCard, cardNumber, expiryDate, cardName, cvc)
    if (data.success) {
        yield put(addBankCard(data))
    }
}

export function* paymentSaga() {
    yield takeEvery(ADD_BANK_CARD, savePaymentSaga)
}