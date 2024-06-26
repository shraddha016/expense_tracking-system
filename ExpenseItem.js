import React,{useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';

const ExpenseItem =(props) =>{

    const [Title, SetTitle] = useState('props.title')

    return (
       
            <Card className='expense-item'>
        
             <ExpenseDate date={new Date(props.date)}   />     

                <div className='expense-item__description'>
                    <h2>{ props.title }</h2>
                    <div className='expense-item__price'>${props.amount}</div>

                </div>

            </Card>
       
    );

}

export default ExpenseItem;