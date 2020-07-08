import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import SearchBarStyles from './SearchBarStyles';
import SearchIcon from '../../../../ui/images/search-icon.svg';
import connect from './connect';

const SearchBar = ({ history, getBlock }) => {
  const [searchString, setSearchString] = useState('');

  const onSearchInputChange = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };

  const onSearchButtonPress = async () => {
    const getBlockResult = await getBlock(searchString);
    if (getBlockResult) {
      history.push(`/btc/block/${searchString}`);
    }
  };

  return (
    <SearchBarStyles searchButtonDisabled={!searchString}>
      <img src={SearchIcon} className="search-icon" alt="icon" />
      <div className="input-wrapper">
        <input type="text" placeholder="Search your transaction, an address or a block" onChange={onSearchInputChange} />
      </div>
      <div className="search-button-wrapper">
        <button className="search-button" disabled={!searchString} onClick={onSearchButtonPress}>
          Search
        </button>
      </div>
    </SearchBarStyles>
  );
};

export default withRouter(connect(SearchBar));
