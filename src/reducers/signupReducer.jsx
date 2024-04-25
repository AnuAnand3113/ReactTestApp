const initialState = [];

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signup":
      return [...state, action.payload];
    default:
      return state;
  }
};
