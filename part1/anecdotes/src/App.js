import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)

  const votes= new Array(6).fill(0);

  const rando = () =>  {

  setSelected(Math.floor((Math.random()*7))) // getting random numbers from 0 to 6

  }
  const vote = () => {
  
    votes[selected] = votes[selected] + 1  
    
  }
  
  
  return (
    <div>
      <button onClick={vote}>vote</button>
      <button onClick={rando}>next anecdotes</button>
      <br></br>
      <p>votes are {votes[selected]}</p>
      {anecdotes[selected]}
    </div>
  )
}

export default App