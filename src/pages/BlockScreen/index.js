import React, { memo } from 'react';
import PageStyles from './components/PageStyles';
import BlockData from './components/BlockData/BlockData';

const BlockScreen = () => {
  return (
    <PageStyles>
      <BlockData />
    </PageStyles>
  );
};

export default memo(BlockScreen);
