import React from 'react'
import { useState } from 'react'

function Second() {

  const [count, setcount] = useState(0)
  console.log("render");

  return (
    <div>
      <button onClick={() => { setcount(prevCount => prevCount + 1) }}> count - {count}</button>
      <button onClick={() => { setcount(0) }}>setcount to 0</button>
      <button onClick={() => { setcount(5) }}>setcount to 5</button>
    </div>
  )
}

export default Second