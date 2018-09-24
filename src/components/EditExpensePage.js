import React from 'react';
import { connect } from 'react-redux';
import ExpensForm from '../components/ExpenseForm';
import { editExpense, deleteExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpensForm
        expense = {props.expense}
        onSubmit = {(expense) => {
          props.dispatch(editExpense({
            ...props.expense,
            ...expense
          }));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(deleteExpense(props.expense.id));
        props.history.push('/')
      }} >Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
