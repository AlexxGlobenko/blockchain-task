import axios from 'api/axios';
import {
  getTableData, getBlockData, getBlockTransactions
} from 'api/blockApi';
import {
  GET_BLOCKS_TABLE_DATA, UPDATE_SPINNER_STATUS, GET_BLOCK_DATA, GET_BLOCK_TRANSACTIONS
} from '../actionNames';

export const getBlocks = (pageNumber = 1) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SPINNER_STATUS, data: true });
    const latestBlockResult = await axios.get('/latestblock');
    const highestBlockNumber = latestBlockResult.height;
    let blocksGeneratedValues = '';
    const lastNumberValueOnThePage = highestBlockNumber - 24 * (pageNumber - 1);
    for (let i = 0; i < 24; i++) {
      blocksGeneratedValues = blocksGeneratedValues ? blocksGeneratedValues.concat(`,${lastNumberValueOnThePage - i}`) : `${lastNumberValueOnThePage}`;
    }
    const getTableDataResult = await getTableData(`/haskoin-store/btc/block/heights?heights=${blocksGeneratedValues}`);
    dispatch({
      type: GET_BLOCKS_TABLE_DATA, highestBlockNumber, blocksList: getTableDataResult
    });
    dispatch({ type: UPDATE_SPINNER_STATUS, data: false });
  } catch (err) {
    dispatch({ type: UPDATE_SPINNER_STATUS, data: false });
    return false;
  }
};

export const getBlock = (blockHash) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SPINNER_STATUS, data: true });
    const blockDataResult = await getBlockData(`/haskoin-store/btc/block/${blockHash}`);
    dispatch({ type: GET_BLOCK_DATA, data: blockDataResult });
    return blockDataResult;
  } catch (err) {
    dispatch({ type: UPDATE_SPINNER_STATUS, data: false });
    return false;
  }
};

export const getBlockTransactionsAction = (txids) => async (dispatch) => {
  try {
    const transactions = await getBlockTransactions(`/haskoin-store/btc/transactions?txids=${txids.slice(0, 5).join(',')}`);
    dispatch({ type: GET_BLOCK_TRANSACTIONS, data: transactions });
  } catch (err) {
    console.log('Error', err);
  }
};
