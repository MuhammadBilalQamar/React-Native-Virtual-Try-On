import { SAVE_USER } from "./type";
import { LOGOUT_USER } from "./type";

const initialState = {
  username: null,
  userId: null,
  email: null,
  imageUrl: null,
  type: "customer",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return { ...action.payload };
    case LOGOUT_USER:
      return { ...initialState, loggedOut: true };
    default:
      return state;
  }
};

export default reducer;
