import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Spinner from 'ui/components/Spinner';
import BlockTableStyles from './BlocksTableStyles';
import connect from './connect';

const columnsTitles = ['Height', 'Hash', 'Mined', 'Size'];
const valuesFieldNames = ['height', 'hash', 'time', 'size'];

const BlocksTable = ({
  getBlocks, blocksList, spinner
}) => {
  
  const getBlocksData = () => {
    getBlocks();
  };

  useEffect(getBlocksData, []);

  const toDateString = (date) => {
    const fixedDate = date * 1000;
    return moment(fixedDate).diff(moment(), 'hours') < 24 ? moment(date * 1000).fromNow(true) : moment(fixedDate).format('YYYY-MM-DD');
  };

  const editHash = (hash) => (
    <span className="column-value">
      <Link to={`/btc/block/${hash}`} className="hash-link">
        {`${hash.slice(0, 1)}..${hash.slice(20)}`}
      </Link>
    </span>
  );

  const formatter = (value) => {
    const formattedNumber = new Intl.NumberFormat('en', {
      style: 'decimal',
      useGrouping: true
    });
    const numberWithiutSymbols = `${formattedNumber.format(value)}`.replace(/,/g, ' ');
    return `${numberWithiutSymbols} bytes`;
  };

  if (spinner) {
    return <Spinner />;
  }

  return (
    <BlockTableStyles>
      <div className="row">
        {columnsTitles.map((columnTitle) => (
          <div className="column" key={columnTitle}>
            <span className="column-title">{columnTitle}</span>
          </div>
        ))}
      </div>
      {blocksList.map((block) => (
        <div className="row" key={block.hash}>
          {valuesFieldNames.map((blockKey) => (
            <div className="column" key={blockKey}>
              {blockKey === 'time' && (<span className="column-value">{toDateString(block[blockKey])}</span>)}
              {blockKey === 'hash' && (
                editHash(block[blockKey])
              )}
              {(blockKey === 'height') && (<span className="column-value">{block[blockKey]}</span>)}
              {(blockKey === 'size') && (<span className="column-value">{formatter(block[blockKey])}</span>)}
            </div>
          ))}
        </div>
      ))}
    </BlockTableStyles>
  );
};

export default connect(BlocksTable);
