const defaultExpenseState = [];

export default (state = defaultExpenseState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
          ...state,
          action.expense
        ];
    case 'DELETE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.expense.id) {
          return {
            ...expense,
            ...action.expense
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
