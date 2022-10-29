
import { useState } from 'react'


const StatisticLine = (props) =>{
  console.log(props)
  return(
    <table>
  <tbody>
  <tr>
    <th>{props.text} {props.value}</th>   
  </tr>
  </tbody>
    </table>
  )


}
const Statistics = (props) => {


if(props.all>0)
{
  return(
       <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.all} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.percentage+"%"} />
       </div>
  )

}
else
{
  return(
    <div>
      no stats
    </div>
  )
}
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage]= useState(0)
  const [percentage, setPercentage] = useState(0)

  const handlegood = () =>{
 
  setAll(all + 1)
 setGood(good + 1)
 setAverage(good - bad/2)
 setPercentage(good/all *100)

}
const handleneutral = () => {
  
  setAll(all + 1)
  setNeutral(neutral + 1)
  setPercentage(good/all *100)

}

const handlebad = () => {

  setAll(all + 1)
  setBad(bad + 1)
  setAverage(good - bad/2)
  setPercentage(good/all *100)
}


  return (
    <div >
      <button onClick={handlegood}>good</button>
      <button onClick={handleneutral}>neutral</button>
      <button onClick={handlebad}>bad</button>
      <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} average={average} percentage={percentage} all={all}> </Statistics>
    </div>
  )
}


export default App