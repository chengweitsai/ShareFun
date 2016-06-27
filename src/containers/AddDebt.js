import { connect } from 'react-redux';
import DebtList from '../components/AddDebt';

const mapStateToProps = (state) => ({
  groupFriends: state.groupFriends,
  debtList: state.debtList.list,
  newDebt: state.newDebt,
  username: state.username,
});

const DebtListContainer = connect(mapStateToProps)(DebtList);

export default DebtListContainer;
