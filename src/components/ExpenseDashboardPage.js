import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilter from '../components/ExpenseListFilter';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);
export default ExpenseDashboardPage;
