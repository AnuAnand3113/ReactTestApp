import { combineReducers, createStore } from "redux";
import { signupReducer } from "../reducers/signupReducer";
import { loginReducer } from "../reducers/loginReducer";

export const config = () => {
  const store = createStore(
    combineReducers({
      signInUser: signupReducer,
      loginUser: loginReducer,
    })
  );

  return store;
};
