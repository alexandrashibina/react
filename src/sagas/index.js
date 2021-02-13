import {registrationSaga} from './registrationSaga';
import {authSaga} from './authSaga';
import {addressListSaga} from './addressListSaga';
import {routeSaga} from './routeSaga';
import {paymentSaga} from './paymentSaga';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
    yield all (
        [
            authSaga(), 
            registrationSaga(),
            addressListSaga(),
            routeSaga(),
            paymentSaga(),
        ]
    )
}

// export default function* rootSaga() {
//     yield fork (authSaga)
//     yield fork (paymentSaga)
// }