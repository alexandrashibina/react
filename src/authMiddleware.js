import { AUTHENTICATE, logIn } from "./actions";
import { serverLogin } from "./api";

export const authMiddleware = (store) => (next) => async (action) => {
  if(action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const data = await serverLogin(email, password)
    if(data.success) {
      store.dispatch(logIn(data.token))
    }
  } else {
    next(action)
  }
}