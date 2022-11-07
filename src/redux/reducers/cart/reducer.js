import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./type";
import { PRODUCTS } from "@constants/constants";

const initialState = {
  cartItems: PRODUCTS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { ...action.payload };
    case REMOVE_CART_ITEM:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
