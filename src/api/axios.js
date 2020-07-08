import axios from 'axios';
import config from 'config';

axios.defaults.baseURL = config.apiBaseUrl;

axios.interceptors.request.use((request) => {
  if (!request.params) {
    request.params = {};
  }

  request.params.cors = true;

  return request;
});

axios.interceptors.response.use(
  ({ data }) => data,
  (err) => {
    throw err;
  }
);
export default axios;
