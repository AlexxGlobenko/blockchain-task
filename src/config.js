const envType = process.env.NODE_ENV || 'development';

const config = {
  development: {
    apiBaseUrl: 'https://blockchain.info',
    secondaryApiBaseUrl: 'https://api.blockchain.info'
  },
  production: {
    apiBaseUrl: 'https://blockchain.info',
    secondaryApiBaseUrl: 'https://api.blockchain.info'
  }
};

export default config[envType];
