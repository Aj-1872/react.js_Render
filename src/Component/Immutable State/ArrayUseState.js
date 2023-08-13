import React from 'react'
import { useState } from 'react'

const initState = ['ajay','odedara']

function ArrayUseState() {
    const [persons, setpersons] = useState(initState)

    const handleClick = () =>{


        // persons.push('akash')
        // persons.push('odedara')
        // setpersons(persons)

        const newPersons = [...persons]

        newPersons.push('akash')
        newPersons.push('Bhutiya')
        setpersons(newPersons)



    }

    console.log("yohohohohoooo");
  return (
    <div>
    <button onClick={handleClick}>Click</button>
    {
        persons.map(person =>(

            <div key={person}>{person}</div>

        ))
    }
    </div>
  )
}

export default ArrayUseState