import {ADDRESS_LIST, getAddressList} from '../actions';
import {addressList} from '../api';
import {takeEvery, call, put} from 'redux-saga/effects';


export function* addressSaga(action) {
    const addresses = action.payload;
    const success = yield call(addressList, addresses)
    if (success) {
        yield put(getAddressList());
    }
}

export function* addressListSaga() {
    yield takeEvery(ADDRESS_LIST, addressSaga); 
}