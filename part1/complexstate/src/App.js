
import { useState } from 'react'


const App = () => {

const [clicks ,setclicks] = useState({left:0 , right:0})


const handleRightClick = () => {

const newClicks = {
...clicks,
right: clicks.right + 1

}
  
setclicks(newClicks)

}

const handleLeftClick = () => {
  
  const newClicks = {

  ...clicks,
  left: clicks.left +1,
  

  }

  setclicks(newClicks)
}



return(

  <div>
    {clicks.left}
    <button onClick={handleLeftClick}>left</button>
    <button onClick={handleRightClick}>right</button>
  {clicks.right} 
  </div>
)

}

export default App;
