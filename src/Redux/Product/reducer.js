import { ADD_PRODUCTS,SORT } from "./actions";

const init = {products:[]};

export const productReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCTS:
      return {products:payload.products}
    case SORT:
      return store;
    default:
      return store;
  }
};
