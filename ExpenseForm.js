import React,{useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const[enteredTitle,SetEnteredTitle]=useState('');
    const[enteredAmount,SetEnteredAmount]=useState('');
    const[enteredDate,SetEnteredDate]=useState('');

    const titleChangeHandler =(event) =>{
        SetEnteredTitle(event.target.value);
    }

    const amountChangeHandler =(event) =>{
        SetEnteredAmount(event.target.value);
    }

    const dateChangeHandler =(event) =>{
        SetEnteredDate(event.target.value);
    }

    const submitHandler=(event)=>{

        event.preventDefault();

        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }
            props.onSaveExpenseData(expenseData);
        console.log(expenseData);

        SetEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate('');

    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />

                </div>

                <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>

                </div>

                <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} />

                </div>

            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;