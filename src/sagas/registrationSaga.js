import {REGISTER, logIn} from '../actions';
import {serverReg} from '../api';
import {takeEvery, call, put} from 'redux-saga/effects';


export function* regSaga(action) {
    const {email, password, name, surname} = action.payload;
    const data = yield call(serverReg, email, password, name, surname)
    if (data.success) {
        yield put(logIn(data.token));
    }
}

export function* registrationSaga() {
    yield takeEvery(REGISTER, regSaga); 
}