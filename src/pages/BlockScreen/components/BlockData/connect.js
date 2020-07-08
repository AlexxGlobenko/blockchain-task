import { connect } from 'react-redux';
import * as blocksActions from 'store/blocks/blocks.actions';

const mapStateToProps = ({ blocks, global }) => ({
  blockData: blocks.blockData,
  spinner: global.spinner,
  blockTransactions: blocks.blockTransactions
});

const mapDispatchToProps = { ...blocksActions };
export default (container) => connect(mapStateToProps, mapDispatchToProps)(container);
