import {SAVE_ADDRESS_LIST} from '../actions';

const initialState = [];

export default function addressListReducer (state = initialState, action) {
  switch (action.type) {
    case SAVE_ADDRESS_LIST: {
      return action.payload;
    }
    default:
      return state
  }
}