import { OPEN_DRAWER, CLOSE_DRAWER } from "./type";

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...action.payload, isOpen: action.payload };
    case CLOSE_DRAWER:
      return { ...initialState, isOpen: action.payload };
    default:
      return state;
  }
};

export default reducer;
