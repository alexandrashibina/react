import {REGISTER, logIn} from '../actions';
import {serverReg} from '../api';
import {takeEvery, call, put} from 'redux-saga/effects';


export function* regSaga(action) {
    const {email, password, name, surname} = action.payload;
    const success = yield call(serverReg, email, password, name, surname)
    if (success) {
        yield put(logIn());
    }
}

export function* registrationSaga() {
    yield takeEvery(REGISTER, regSaga); 
}