import * as types from './actionTypes';

export function getProductDetails() {
  return {
    type: types.PRODUCT_DETAILS_REQUEST,
  };
}
