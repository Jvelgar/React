import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) =>{

    const[counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleResta = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }
    

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleResta}>-1</button>
            <button onClick={handleReset}>Resert</button>
        </>
    );
} 


CounterApp.PropTypes = {
    value: PropTypes.number.isRequired,
}


