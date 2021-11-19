import { fork } from 'redux-saga/effects';
import productDetailsSaga from './ProductDetailsSaga';
import userDetailsSaga from './UserDetailsSaga';

function* sagas() {
  yield fork(productDetailsSaga);
  yield fork(userDetailsSaga);
}

export default sagas;
