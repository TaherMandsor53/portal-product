import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../action/actionTypes';
import api from '../api/api';

function* userSaga(action) {
  console.log('saga');
  try {
    const userDetails = yield call(api.fetchUserDetails);
    yield put({
      type: types.USER_DETAILS_SUCCESS,
      userDetails: userDetails.data,
    });
  } catch (e) {
    yield put({ type: types.USER_DETAILS_ERROR, message: e.message });
  }
}

function* userDetailsSaga() {
  console.log('saga');
  yield takeLatest(types.USER_DETAILS_REQUEST, userSaga);
}

export default userDetailsSaga;
