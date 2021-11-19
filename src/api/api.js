import axios from 'axios';

const baseURL = `http://localhost:3000`;

const fetchProductDetails = () => {
  const URL = `${baseURL}/data.json`;
  return axios.get(URL);
};

const fetchUserDetails = () => {
  console.log('api');
  const URL = `${baseURL}/userDetails.json`;
  return axios.get(URL);
};

export default {
  fetchProductDetails,
  fetchUserDetails,
};
