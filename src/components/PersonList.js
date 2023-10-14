import React from 'react'
import Person from './Person'

function PersonList() {
    const names= ['Bruce','Clark','Diana']
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:30,
            skill:'React'
        }
    ]

    const nameList=names.map((name,index)=><h2 key={index} >{index} {name}</h2>)
    // const personsList=persons.map(person=> <h2>I am {person.name}. I am {person.age} years old. and I know {person.skill}</h2>)
    const personsList=persons.map(person=><Person key={person.id} person={person} />)


  return (
    <div> 
      {/* {personsList} */}
      {nameList}
      </div>
  )
}

export default PersonList