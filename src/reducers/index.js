export default (state, action) => {
  switch (action.type) {
    case 'WITHDRAW': {
      const { totalAmount } = state;
      const { substructer } = action;
      return { ...state, totalAmount: totalAmount - substructer };
    }
    default:
      return state;
  }
};
