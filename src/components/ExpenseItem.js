import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense ={
            name: name,
            cost:10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload:expense
        })
    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><AiOutlinePlusCircle onClick={event=> increaseAllocation(props.name)}></AiOutlinePlusCircle></td>
        <td><AiOutlineMinusCircle onClick={event => decreaseAllocation(props.name)}></AiOutlineMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
