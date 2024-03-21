import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget, dispatch, expenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const handleSaveBudget = () => {
        const parsedBudget = parseInt(newBudget);
        if (parsedBudget > 960) {
            alert("The budget value cannot be below total expenses.");
            return;
        }
        if (parsedBudget < totalExpenses) {
            alert("The budget cannot be below total expenses");
            setNewBudget(totalExpenses);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget),
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
            <div>
            <span>$</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange} 
                onBlur={handleSaveBudget} // Save the budget when focus is lost
            />
            </div>
            <button onClick={handleSaveBudget}>Save</button>
        </div>
    );
};
export default Budget;
