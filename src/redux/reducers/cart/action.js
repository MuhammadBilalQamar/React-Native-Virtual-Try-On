import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./type";

export const addCartItem = (item) => {
  return {
    type: ADD_CART_ITEM,
    payload: item,
  };
};

export const removeCartItem = (item) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: item,
  };
};
