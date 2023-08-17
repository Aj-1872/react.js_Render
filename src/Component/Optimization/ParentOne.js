import React, { Children } from 'react'
import { useState } from 'react'
// import ChildOne from './ChildOne';

function ParentOne() {

    const [count, setcount] = useState(0)
    console.log("render");

    return (
        <div>

            <button onClick={() => { setcount(prevCount => prevCount + 1) }}> count - {count}</button>


        </div>
        // {Children}
        // <ChildOne />

    )
}

export default ParentOne