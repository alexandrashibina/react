import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import { authMiddleware } from "./authMiddleware";
import { cardMiddleware } from "./cardMiddleware";

export const store = createStore(rootReducer, compose (applyMiddleware(authMiddleware), applyMiddleware(cardMiddleware)));