import {combineReducers} from 'redux';
import addressListReducer from './addressListReducer';
import authReducer from './authReducer';
import cardReducer from './cardReducer';
import routeReducer from './routeReducer';


export default combineReducers({auth: authReducer, card: cardReducer, addresses: addressListReducer, route: routeReducer})