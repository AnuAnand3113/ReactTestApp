const initialState = {};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return { ...state, ...action.payload };
    case "logout":
      return initialState;
    default:
      return state;
  }
};
