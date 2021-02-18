import {AUTHENTICATE, logIn} from '../actions';
import {serverLogin} from '../api';
import {takeEvery, call, put} from 'redux-saga/effects';


export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const success = yield call(serverLogin, email, password)
    if (success) {
        yield put(logIn());
    }
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga); 
}