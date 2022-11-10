import { OPEN_DRAWER, CLOSE_DRAWER } from "./type";

export const openDrawer = (payload) => {
  return {
    type: OPEN_DRAWER,
    payload: payload,
  };
};

export const closeDrawer = (payload) => {
  return {
    type: CLOSE_DRAWER,
    payload: payload,
  };
};
