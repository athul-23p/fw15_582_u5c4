// action types
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const SORT = "SORT";

// Action Creators
const addProducts = (products) =>{
    return {
        type:ADD_PRODUCTS,
        payload: products
    }
}

const sort = (sortBy) => {
    return {
        type: SORT,
        payload: sortBy
    }
}

export {addProducts,sort};