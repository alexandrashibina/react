import {ROUTE, getRoute} from '../actions';
import {route} from '../api';
import {takeEvery, call, put} from 'redux-saga/effects';


export function* routeSaga(action) {
    const {address1, address2} = action.payload;
    const success = yield call(route, address1, address2)
    if (success) {
        yield put(getRoute());
    }
}

export function* buildRouteSaga() {
    yield takeEvery(ROUTE, routeSaga); 
}