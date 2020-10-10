import React, { useState } from 'react'

export default function Clicker () {
    const [count, setCount] = useState(0);
    const delayDecrease = () => {
        setTimeout(() => {
            setCount(count -1)
        }, 1000);
    }
    return (
        <div>            
            <h1 data-testid="count">{count}</h1>
            <button data-testid="increase" onClick={() => setCount(count+1)}>Increase</button>
            <button data-testid="decrease" onClick={delayDecrease}>Decrease</button>
        </div>
    )
}