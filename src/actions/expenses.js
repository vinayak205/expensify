import uuid from 'uuid';

// Expense actions
// ADD_EXPENSE
export const addExpense = ({ amount = 0, description = '', note = '', createdAt = 0 } = {}) => ({
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
export const deleteExpense = (id) => ({
    id,
    type: 'DELETE_EXPENSE'
});

// EDIT_EXPENSE
export const editExpense = (expense) => ({
    expense,
    type: 'EDIT_EXPENSE'
});
