import {ADD_BANK_CARD} from '../actions';

const initialState = {
  cardAdded: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_BANK_CARD: {
      return {cardAdded: true, ...action.payload}
    }
    default:
      return state
  }
}