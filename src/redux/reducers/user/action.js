import { LOGOUT_USER, SAVE_USER } from "./type";

export const saveUser = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: {
      username: null,
      userId: null,
      email: null,
      imageUrl: null,
      type: "customer",
    },
  };
};
