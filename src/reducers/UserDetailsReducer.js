import * as types from '../action/actionTypes';

const initialState = {
  isFetching: false,
  userDetailsData: {},
};

export default function userDetails(state = initialState, action) {
  switch (action.type) {
    case types.USER_DETAILS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case types.USER_DETAILS_SUCCESS:
      return Object.assign({}, state, { isFetching: false, userDetailsData: action.userDetails });

    case types.USER_DETAILS_ERROR:
      return Object.assign({}, state, { isFetching: false, error: action.message });

    default:
      return state;
  }
}
