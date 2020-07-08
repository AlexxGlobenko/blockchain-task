import config from 'config';
import axios from './axios';

export const getLast = () => axios.get(`${config.apiBaseUrl}/latestblock`);

export const getTableData = (heights) => axios.get(`${config.secondaryApiBaseUrl}/haskoin-store/btc/block/heights`, { params: { notx: true, heights } });

export const getBlockData = (blockHash) => axios.get(`${config.secondaryApiBaseUrl}/haskoin-store/btc/block/${blockHash}`);

export const getBlockTransactions = (txids) => axios.get(`${config.secondaryApiBaseUrl}/haskoin-store/btc/transactions`, { params: { txids }});
