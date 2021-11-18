import * as types from '../action/actionTypes';

const initialState = {
  isFetching: false,
  productDetailsData: [],
};

export default function productDetails(state = initialState, action) {
  switch (action.type) {
    case types.PRODUCT_DETAILS_REQUEST:
      console.log('request');
      return { ...state, isFetching: true };

    case types.PRODUCT_DETAILS_SUCCESS:
      return { isFetching: false, productDetailsData: action.productDetails };

    case types.PRODUCT_DETAILS_ERROR:
      return { ...state, isFetching: false, error: action.message };

    default:
      return state;
  }
}
