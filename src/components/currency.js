import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const changecurr = (props) => {
    const { currency, dispatch } = useContext(AppContext);
    const [ currname , setcurrname ] = useState(props.currency);

    const slectchange = ()=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        })
    }

    return(
        <div>
            <select onChange={event=> setcurrname(event.target.value) }>
                <label>currency</label><option defaultValue>{currname}</option>
                <option> $ Dollar </option>
                <option> € Euro</option>
                <option> ₨ Ruppee </option>
            </select>
        </div>
    );
};

export default changecurr;
