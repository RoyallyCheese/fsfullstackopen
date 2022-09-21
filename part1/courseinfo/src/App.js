import React  from "react"
import Content from "./content"
import Header from "./header"
import Total from "./total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

return (
  <div>
    <Header course = {course}></Header>
    <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} ></Content>
    <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}> </Total>
  </div>
)

}

export default App