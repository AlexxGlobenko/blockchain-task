import { combineReducers } from 'redux';

import globalStore from 'store/global/global.reducer';
import blocksReducer from './blocks/blocks.reducer';

export default combineReducers({
  // eslint-disable-next-line object-curly-newline
  global: globalStore,
  blocks: blocksReducer
});
