import config from 'config';
import axios from './axios';

export const getLast = () => axios.get(`${config.apiBaseUrl}/asdasd`);

export const getTableData = (requestString) => axios.get(`${config.secondaryApiBaseUrl}/${requestString}`, { params: { notx: true } });

export const getBlockData = (requestString) => axios.get(`${config.secondaryApiBaseUrl}/${requestString}`);

export const getBlockTransactions = (requestString) => axios.get(`${config.secondaryApiBaseUrl}/${requestString}`);
