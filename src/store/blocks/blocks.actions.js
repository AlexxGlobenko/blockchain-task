import {
  getTableData, getBlockData, getBlockTransactions, getLast
} from 'api/blockApi';
import { updateSpinnerStatus } from '../global/global.actions';
import {
  GET_BLOCKS_TABLE_DATA, GET_BLOCK_DATA, GET_BLOCK_TRANSACTIONS
} from '../actionNames';

const perPage = 50;

export const getBlocks = (pageNumber = 1) => async (dispatch) => {
  try {
    dispatch(updateSpinnerStatus(true));
    const latestBlockResult = await getLast();
    const highestBlockNumber = latestBlockResult.height;
    let blocksGeneratedValues = '';
    const lastNumberValueOnThePage = highestBlockNumber - perPage * (pageNumber - 1);
    for (let i = 0; i < perPage; i++) {
      blocksGeneratedValues = blocksGeneratedValues ? blocksGeneratedValues.concat(`,${lastNumberValueOnThePage - i}`) : `${lastNumberValueOnThePage}`;
    }
    const getTableDataResult = await getTableData(blocksGeneratedValues);
    dispatch({
      type: GET_BLOCKS_TABLE_DATA, highestBlockNumber, blocksList: getTableDataResult
    });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(updateSpinnerStatus(false));
  }
};

export const getBlock = (blockHash) => async (dispatch) => {
  try {
    dispatch(updateSpinnerStatus(true));
    const blockDataResult = await getBlockData(blockHash);
    dispatch({ type: GET_BLOCK_DATA, data: blockDataResult });
    return blockDataResult;
  } catch (err) {
    return false;
  } finally {
    dispatch(updateSpinnerStatus(false));
  }
};

export const getBlockTransactionsAction = (txids) => async (dispatch) => {
  try {
    const transactions = await getBlockTransactions(txids.slice(0, 5).join(','));
    dispatch({ type: GET_BLOCK_TRANSACTIONS, data: transactions });
  } catch (err) {
    console.log('Error', err);
  }
};
