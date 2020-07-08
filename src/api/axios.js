import axios from 'axios';

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
