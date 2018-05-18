import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Expense actions
// ADD_EXPENSE
const addExpense = ({ amount = 0, description = '', note = '', createdAt = 0 } = {}) => ({
  expense: {
    id: uuid(),
    amount,
    description,
    note,
    createdAt
  },
  type: 'ADD_EXPENSE'
});

// DELETE_EXPENSE
const deleteExpense = (id) => ({
  id,
  type: 'DELETE_EXPENSE'
});

// EDIT_EXPENSE
const editExpense = (expense) => ({
  expense,
  type: 'EDIT_EXPENSE'
});


// Filter actions
// SET_TEXT_FILTER
const setText = (text = '') => ({
  text,
  type: 'SET_TEXT'
});
// SORT_BY_DATE
const setSortByDate = () => ({
  type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const setSortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
const setStartDate = (startDate) => ({
  startDate,
  type: 'SET_START_DATE'
});
// SET_END_DATE
const setEndDate = (endDate) => ({
  endDate,
  type: 'SET_END_DATE'
});

const defaultExpenseState = [];

const expenseReducer = (state = defaultExpenseState, action) => {
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

const defaultFilterState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

const store = createStore(combineReducers({
  expenses: expenseReducer,
  filters: filterReducer
}));

const getVisibleExpenses = (expenses, filters) => {
  return expenses.filter((expense) => {
    const textFilter = expense.description.includes(filters.text);
    const startDateFilter = typeof filters.startDate !== 'number' || expense.createdAt >= filters.startDate;
    const endDateFilter = typeof filters.endDate !== 'number' || expense.createdAt <= filters.endDate;

    return textFilter && startDateFilter && endDateFilter;
  }).sort((a, b) => {
    if (filters.sortBy === 'amount') {
      return a.amount > b.amount ? -1 : 1;
    }

    return a.createdAt > b.createdAt ? -1 : 1;
  });
};

store.subscribe(() => {
  const state = store.getState();
  //console.log(store.getState());
  console.log(getVisibleExpenses(state.expenses, state.filters));
});

const rent = store.dispatch(addExpense({ amount: 200, description: 'rent', createdAt: 1000 }));
const coffee = store.dispatch(addExpense({ amount: 700, description: 'coffee', createdAt: 2000 }));

//store.dispatch(deleteExpense(rent.expense.id));

// store.dispatch(editExpense({
//   ...rent.expense,
//   amount: 1000
// }));

//store.dispatch(setText('rent'));
//store.dispatch(setSortByAmount());
//store.dispatch(setSortByDate());
//store.dispatch(setStartDate(1000));
//store.dispatch(setEndDate(1500));

const expense = {
  id: 'id',
  amount: 1000,
  note: '',
  description: '',
  createdAt: 0
};

const filters = {
  text: '',
  sortBy: 'data', // date or amount
  startDate: undefined,
  endDate: undefined
};