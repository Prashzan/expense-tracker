import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import {Header as Hea} from 'semantic-ui-react';

const AddExpensePage = (props) => (
  <div>
    <Hea size='huge' style={{marginTop: '70px', marginLeft: '20px'}}><h1>Add Expense</h1></Hea>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
