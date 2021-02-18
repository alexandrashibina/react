import {ROUTE, getRoute} from '../actions';
import {route} from '../api';
import {takeEvery, call, put} from 'redux-saga/effects';


export function* watchRouteSaga(action) {
    const {address1, address2} = action.payload;
    const success = yield call(route, address1, address2)
    if (success) {
        yield put(getRoute());
    }
}

export function* routeSaga() {
    yield takeEvery(ROUTE, watchRouteSaga); 
}