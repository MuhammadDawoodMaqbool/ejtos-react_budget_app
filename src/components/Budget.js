import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, expenses } = useContext(AppContext);
  const [budgetInput, setBudgetInput] = useState(budget);

  const handleBudgetChange = (event) => {
    const newBudget = parseInt(event.target.value);
    setBudgetInput(newBudget);
    handleBudgetUpdate();
  };

  const handleBudgetUpdate = () => {
    const totalSpending = expenses.reduce((total, expense) => {
      return total + expense.cost;
    }, 0);

    if (budgetInput < totalSpending) {
      alert('Budget cannot be lower than total spending.');
    } else {
      dispatch({ type: 'SET_BUDGET', payload: budgetInput });
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: </span>
      <input
        type='number'
        value={budgetInput}
        max={20000}
        onChange={handleBudgetChange}
      />
     
    </div>
  );
};
 
export default Budget;
 
