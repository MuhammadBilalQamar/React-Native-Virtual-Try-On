import { LOGOUT_USER, SAVE_USER } from "./type";

export const saveUser = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};

export const logoutUser = (user) => {
  return {
    type: LOGOUT_USER,
    payload: user,
  };
};
