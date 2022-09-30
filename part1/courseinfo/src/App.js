import React  from "react"
import Content from "./content"
import Header from "./header"
import Total from "./total"
import Hello from "./hello"
import { useState } from 'react'

const App = (props) => {
  
  const [counter, setCounter ] = useState(0)


  console.log('rendering...', counter)

  const name = 'John'

  const age = 10 

  const course = {
  name: 'Half Stack application development',
  parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
  
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  },
  ]
  }

return (
  <div>
    {counter}
    <Header course = {course.name}></Header>
    <Content parts = {course.parts} ></Content>
    <Total parts = {course.parts}> </Total>
    <Hello name={name} age={age} />
    <button onClick={()=>setCounter(counter + 1)}>click</button>
  </div>
  
)

}

export default App