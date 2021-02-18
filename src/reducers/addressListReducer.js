import {ADDRESS_LIST} from '../actions';

const initialState = {
  addressList: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADDRESS_LIST: {
      return {addressList: true, ...action.payload}
    }
    default:
      return state
  }
}