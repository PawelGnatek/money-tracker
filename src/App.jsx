import { useState } from 'react';
import ExpList from './components/Exp/ExpList';
import NewExp from './components/NewExp/NewExp';


const dummyExp = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2023, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2022, 5, 12),
    },
    {
        id: 'e5',
        title: 'iPhone',
        amount: 599,
        date: new Date(2023, 4, 25),
    },
    {
        id: 'e6',
        title: 'Bike',
        amount: 250,
        date: new Date(2023, 8, 1),
    },
];

const App = () => {
    
    const [expList, setExpList] = useState(dummyExp);

    const addExpHandler = expense => {
        setExpList((prevExp) => {
            return [expense, ...prevExp];
        });
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'gold' }}>$ Money Tracker $</h1>
            <NewExp onAddExp={addExpHandler} />
            
            <ExpList items={expList} />
        </div>
    );
}

export default App;
