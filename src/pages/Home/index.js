import React, { memo } from 'react';

import PageStyles from './components/PageStyles';
import SearchBar from './components/SearchBar/SearchBar';
import BlocksTable from './components/BlocksTable/BlocksTable';

const Home = () => (
  <PageStyles>
    <div className="top-wrapper">
      <SearchBar />
    </div>
    <BlocksTable />
  </PageStyles>
);

export default memo(Home);
