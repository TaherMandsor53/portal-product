import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../action/actionTypes';
import api from '../api/api';

function* productSaga(action) {
  try {
    const productDetails = yield call(api.fetchProductDetails);
    yield put({
      type: types.PRODUCT_DETAILS_SUCCESS,
      productDetails: productDetails.data,
    });
  } catch (e) {
    yield put({ type: types.PRODUCT_DETAILS_ERROR, message: e.message });
  }
}

function* productDetailsSaga() {
  yield takeLatest(types.PRODUCT_DETAILS_REQUEST, productSaga);
}

export default productDetailsSaga;
