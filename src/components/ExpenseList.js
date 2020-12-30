import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import {Header as Hea} from 'semantic-ui-react';

const ExpenseList = (props) => (
  <div>
    <Hea style={{marginLeft: '20px', marginTop: '30px'}}><h1>Expense List</h1></Hea>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
