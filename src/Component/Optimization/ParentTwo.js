import React, { Children } from 'react'
import { useState } from 'react'
import MemoizedChildTwo from './ChildTwo';
// import ChildOne from './ChildOne';

function ParentTwo() {

    const [count, setcount] = useState(0)
    const [name, setName] = useState('ajay')
    console.log("render");

    return (
        <div>

            <button onClick={() => { setcount(prevCount => prevCount + 1) }}> count - {count}</button>
            <button onClick={() => setName('usha')}>changeName</button>
            <MemoizedChildTwo name={name} />
        </div>
        // {Children}
        // <ChildOne />
    )
}

export default ParentTwo