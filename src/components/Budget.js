import React, { useState, useContext } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);
  

	const handleEditClick = () => {
		setIsEditing(true);
	};
    let max=20000;
    let min=1000;
    
	const handleSaveClick = (value) => {
        if(value> max ){
            alert("The value cannot exceed remaining funds  £"+20000);
            
        }else if(value<min){
            alert("The value cannot be less than £"+1000);
           
        }else{
            alert("enter the value between 1000 & 20000")
            
        }
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budget;
