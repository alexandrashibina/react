import {ROUTE, saveRoute} from '../actions';
import {route} from '../api';
import {takeEvery, call, put} from 'redux-saga/effects';


export function* watchRouteSaga(action) {
    const {address1, address2} = action.payload;
    const routes = yield call(route, address1, address2)
    if (routes) {
        yield put(saveRoute(routes));
    }
}

export function* routeSaga() {
    yield takeEvery(ROUTE, watchRouteSaga); 
}