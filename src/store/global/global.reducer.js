import { REFRESH_WHOLE_STORE, UPDATE_SPINNER_STATUS } from '../actionNames';

const initialStore = () => ({
  spinner: false
});

export default (store = initialStore(), { type, data } = {}) => {
  switch (type) {
    case REFRESH_WHOLE_STORE:
      return initialStore();
    case UPDATE_SPINNER_STATUS:
      return {
        ...store,
        spinner: typeof data === 'boolean' ? data : !store.spinner
      };   

    default:
      return store;
  }
};
