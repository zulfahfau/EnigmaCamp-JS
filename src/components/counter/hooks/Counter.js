import React from 'react'
import {useState, useEffect} from 'react'
import {Col} from 'react-bootstrap'
const Counter = () => {

    const [count, setCount] = useState(1)
    
    useEffect(() => {
        // logic
        console.log('useEffect called');
    })
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        if (count>0) {
            setCount(count-1);   
        }
    }
    return (
        <Col className="mt-5">
            <h1>{count}</h1>
            <button onClick={increment} className="btn btn-outline btn-info mt-3">+</button>
            <button onClick={decrement} className="btn btn-outline btn-info mt-3 mx-1">-</button>
        </Col>
    )
}

export default Counter;