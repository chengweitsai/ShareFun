const debtList = (state = {
  isFetchingAdd: false,
  isFetchingGet: false,
  isFetchingRepay: false,
  list: [],
  repayList: [],
  settled: false,
  err: false,
}, action) => {
  switch (action.type) {
    case 'REQUEST_ADD_DEBT':
      return Object.assign({}, state, {
        isFetchingAdd: true,
      });
    case 'RECEIVE_ADD_DEBT':
      return Object.assign({}, state, {
        isFetchingAdd: false,
        err: action.err,
        list: [...state.list, action.payload],
      });
    case 'REQUEST_GET_DEBT_LIST':
      return Object.assign({}, state, {
        isFetchingGet: true,
      });
    case 'RECEIVE_GET_DEBT_LIST':
      return Object.assign({}, state, {
        isFetchingGet: false,
        list: action.payload,
      });
    case 'REQUEST_GET_GROUP_REPAY':
      return Object.assign({}, state, {
        isFetchingRepay: true,
      });
    case 'RECEIVE_GET_GROUP_REPAY':
      return Object.assign({}, state, {
        isFetchingRepay: false,
        settled: true,
        repayList: action.payload,
      });
    default:
      return state;
  }
};

export default debtList;
