import React, {useState} from 'react'
import Count from './components/count';
import './App.css'

const App = () => {
 let [state , setState] = useState (0);

  function handleInc(){
    setState(state+1)
  }

  function handleDec(){
    setState(state-1)
  }

return (
  <div>
    <Count  number={state} />
    <button className='btn' onClick={handleInc} >increment</button>
    <button onClick={handleDec} >decrement</button>
  </div>
)
}
export default App;
