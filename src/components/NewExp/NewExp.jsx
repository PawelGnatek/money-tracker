import './NewExp.css';

import ExpForm from './ExpForm';
import { useState } from 'react';

const NewExp = (props) => {
    const[addFormVisible, setAddFormVisible] = useState(false);


    const AddSubmitHandler = (enteredFormData) => {
        const newInput = {
            ...enteredFormData,
            id: Math.random().toString(),
        };
        props.onAddExp(newInput);
    };

    const AddExpFormHandle = ()=>{
        setAddFormVisible(true);
    }

    const cancelAddExpForm = ()=>{
        setAddFormVisible(false);
    }

    return (
        <div className='new-expense'>
           {!addFormVisible && <button onClick={AddExpFormHandle}>Add New Expense</button>}
            {addFormVisible && <ExpForm onAddSubmit={AddSubmitHandler} onCancel={cancelAddExpForm}/>}
        </div>
    );
};

export default NewExp;
