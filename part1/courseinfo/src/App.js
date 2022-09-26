import React  from "react"
import Content from "./content"
import Header from "./header"
import Total from "./total"

const App = () => {
  
  
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
    <Header course = {course.name}></Header>
    <Content parts = {course.parts} ></Content>
    <Total parts = {course.parts}> </Total>
  </div>
)

}

export default App