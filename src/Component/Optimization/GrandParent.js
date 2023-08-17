import React from 'react'
import { useState } from 'react'
import ParentOne from './ParentOne'
import ChildOne from './ChildOne'

const GrandParent = () => {

    const [newCount, setNewCount] = useState(0)
    return (
        <div>
            <button onClick={() => { setNewCount(prevCount => (prevCount + 1)) }}>Grand Parent Count - {newCount}</button>
            <ParentOne newCount={newCount}>
                <ChildOne />
            </ParentOne>

        </div>
    )
}

export default GrandParent