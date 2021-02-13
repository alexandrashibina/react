import {ADD_BANK_CARD} from '../actions';

const initialState = {
  isLoggedIn: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BANK_CARD: {
      return {...action.payload}
    }
    default:
      return state
  }
}


// component UI
/* 
redux - store
 - actions
 - middlewares
 - reducers
 - state -> re-render
*/