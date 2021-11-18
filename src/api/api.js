import axios from 'axios';

const baseURL = `http://localhost:3000`;

const fetchProductDetails = () => {
  const URL = `${baseURL}/store/data.json`;
  return axios.get(URL);
};

export default {
  fetchProductDetails,
};
