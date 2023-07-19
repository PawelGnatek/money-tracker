import './ExpList.css';

import ExpItem from './ExpItem';
import Card from '../UI/Card';
import ExpFilter from './ExpFilter';
import { useState } from 'react';
import ExpChart from './ExpChart';

const ExpList = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterSelectHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    //Filter results
    let noExpAlert = (
        <p style={{ textAlign:'center', fontSize: 24, fontWeight: 'bold', color: 'red' }}>No expenses found</p>
    );
    if (filteredExpenses.length > 0) {
        noExpAlert = filteredExpenses.map((expense) => (
            <ExpItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpChart expenses={filteredExpenses} />
                <ExpFilter selected={filteredYear} onFilterSelect={filterSelectHandler} />
                {noExpAlert}
                
            </Card>
        </div>
    );
};

export default ExpList;
