import { fork } from 'redux-saga/effects';
import productDetailsSaga from './ProductDetailsSaga';

function* sagas() {
  yield fork(productDetailsSaga);
}

export default sagas;
