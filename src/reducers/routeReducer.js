import {SAVE_ROUTE} from '../actions';

const initialState = [];

export default function routeReducer (state = initialState, action) {
  switch (action.type) {
    case SAVE_ROUTE: {
      return action.payload;
    }
    default:
      return state
  }
}