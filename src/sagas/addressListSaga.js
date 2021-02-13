import {ADDRESS_LIST, getAddressList} from '../actions';
import {addressList} from '../api';
import {takeEvery, call, put} from 'redux-saga/effects';


export function* addressSaga(action) {
    const list = action.payload;
    const success = yield call(addressList, list)
    if (success) {
        yield put(getAddressList());
    }
}

export function* addressListSaga() {
    yield takeEvery(ADDRESS_LIST, addressSaga); 
}