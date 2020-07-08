import { connect } from 'react-redux';
import * as blocksActions from '../../../../store/blocks/blocks.actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = { ...blocksActions };
export default (container) => connect(mapStateToProps, mapDispatchToProps)(container);
