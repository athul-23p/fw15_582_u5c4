import { ADD_PRODUCTS,SORT } from "./actions";

const init = {orders:[]};

export const productReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCTS:
      // console.log("rd",payload);
      return {orders:payload}
    case SORT:
      return store;
    default:
      return store;
  }
};
