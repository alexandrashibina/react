import {ADDRESS_LIST, saveAddressList} from '../actions';
import {fetchAddressList} from '../api';
import {takeEvery, call, put} from 'redux-saga/effects';


export function* addressSaga() {
    const {addresses} = yield call(fetchAddressList)
    if (addresses) {
        yield put(saveAddressList(addresses));
    }
}

export function* addressListSaga() {
    yield takeEvery(ADDRESS_LIST, addressSaga); 
}