import { ADD_PRODUCT, REMOVE_PRODUCT } from "./type";
import { PRODUCTS } from "@constants/constants";

const initialState = {
  products: PRODUCTS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...action.payload };
    case REMOVE_PRODUCT:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
