import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div style={{marginLeft: '30px', marginTop: '40px'}}>
    <Link to={`/edit/${id}`}>
      <h1>{description}</h1>
    </Link>
    <h3>{amount} - {createdAt}</h3>
  </div>
);

export default ExpenseListItem;
