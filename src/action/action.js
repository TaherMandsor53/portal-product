import * as types from './actionTypes';

export function getProductDetails() {
  console.log('hello');
  return {
    type: types.PRODUCT_DETAILS_REQUEST,
  };
}
