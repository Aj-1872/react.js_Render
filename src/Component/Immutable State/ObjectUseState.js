import React from 'react'
import { useState } from 'react'

const initState = {
    fname : 'ajay',
    lname : 'odedara'
}

const ObjectUseState = () => {

    const [person, setperson] = useState(initState)

    const changeName = () =>{
       
       const newPerson = {...person}
       newPerson.fname = 'Akash'
       newPerson.lname = 'bhutiya'

       setperson(newPerson);
    }

    console.log('ObjectUstate Render')
  return (
    <div>
    
            <button onClick={changeName}>{person.fname}  {person.lname}</button>

    </div>
  )
}

export default ObjectUseState