import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
 

const CurrencySelector = () => {
  const { currency, dispatch } = useContext(AppContext);
 
  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  }; 

  return (
    <div className='currency-selector'>
      <label htmlFor='currency'>Select Currency:</label>
      <select
        id='currency'
        value={currency}
        onChange={handleCurrencyChange}
        className='currency-select'
      >
        <option value='$'>Dollar ($)</option>
        <option value='£'>Pound (£)</option>
        <option value='€'>Euro (€)</option>
        <option value='₹'>Rupee (₹)</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
