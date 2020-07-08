import {
  GET_BLOCKS_TABLE_DATA,
  GET_BLOCK_DATA,
  GET_BLOCK_TRANSACTIONS
} from '../actionNames';

const getInitialState = () => ({
  blocksList: [],
  highestBlockNumber: undefined,
  blockData: {},
  blockTransactions: []
});

const blocksReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case GET_BLOCKS_TABLE_DATA:
      return {
        ...state,
        blocksList: action.blocksList,
        highestBlockNumber: action.highestBlockNumber
      };
    case GET_BLOCK_DATA:
      return {
        ...state,
        blockData: action.data
      };
    case GET_BLOCK_TRANSACTIONS:
      return {
        ...state,
        blockTransactions: action.data
      };
    default:
      return state;
  }
};

export default blocksReducer;
