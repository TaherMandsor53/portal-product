import { combineReducers } from 'redux';

import productDetails from './ProductDetailsReducer';
import userDetails from './UserDetailsReducer';

export default combineReducers({
  productDetails,
  userDetails,
});
