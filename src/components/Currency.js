import React, { useState } from 'react';


const Currency = () => {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState('GBP');
    const [currencyType, setCurrencyType] = useState('USD');


    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleCurrencyChange = (event) => {
        setCurrencyType(event.target.value);
      };

    return (
        <div>
            <label htmlFor="currency" style={{ backgroundColor: 'green', color: 'white', padding: '5px' }}>Currency:</label>
            <select
                id="currency"
                value={currencyType}
                onChange={handleCurrencyChange}
                style={{ backgroundColor: 'green', color: 'white' }}
                >
        <option value="USD">Dollar</option>
        <option value="GBP">Pound</option>
        <option value="EUR">Euro</option>
        <option value="INR">Rupee</option>
      </select>
        </div>
    );
};

export default Currency;
