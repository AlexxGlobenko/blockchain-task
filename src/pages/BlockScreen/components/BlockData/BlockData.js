import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Spinner from 'ui/components/Spinner';
import Arrow from 'ui/images/next.svg';
import BlockDataStyles from './BlockDataStyles';
import connect from './connect';

const fieldNames = {
  hash: 'Hash',
  // confirmations: "Confirmations",
  time: 'Timestamp',
  height: 'Height',
  // transactionsQuantitty: '',
  // difficulty: '',
  merkle: 'Merkle root',
  version: 'Version',
  bits: 'Bits',
  weight: 'Weight',
  size: 'Size',
  nonce: 'Nonce'
  // transactionsVolume: '',
  // blockReward: '',
  // feeReward: ''.
};

const BlockData = ({
  blockTransactions, getBlockTransactionsAction, blockData, spinner, getBlock, match: { params: { hash } }
}) => {
  useEffect(async () => {
    const getBlockResult = await getBlock(hash);
    if (getBlockResult) {
      getBlockTransactionsAction(getBlockResult.tx);
    }
  }, []);

  if (spinner) {
    return <Spinner />;
  }

  return (
    <BlockDataStyles>
      <h1 className="page-title">
Block
        {blockData.height}
      </h1>
      {Object.keys(fieldNames).map((fieldName) => (
        <div className="row">
          <div className="column column-title">
            <span>{fieldNames[fieldName]}</span>
          </div>
          <div className="column column-value">
            <span>{blockData[fieldName]}</span>
          </div>
        </div>
      ))}
      {blockTransactions.length && (
        <>
          <h1 className="page-title">Block transactions</h1>
          {blockTransactions.map((transaction) => (
            <div className="transaction-row" key={transaction.txid}>
              <span className="hash">
Hash:
                {transaction.txid}
              </span>
              {(transaction.inputs && transaction.outputs) && (
              <div className="nested-transaction-row">
                <div className="addresses-wrapper">
                  {transaction.inputs.map((input) => (
                    <span>{input.address}</span>
                  ))}
                </div>
                <img src={Arrow} className="arrow" alt="icon" />
                <div className="addresses-wrapper">
                  {transaction.outputs.map((input) => (
                    <span>{input.address}</span>
                  ))}
                </div>
              </div>
              )}
            </div>
          ))}
        </>
      )}
    </BlockDataStyles>
  );
};

export default withRouter(connect(BlockData));
