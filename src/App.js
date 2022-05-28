import { Divider } from '@chakra-ui/react'
import './App.css';
import StopWatch from './components/StopWatch';
import Timer from "./components/Timer"
import React,{useState} from 'react';
import { Heading } from '@chakra-ui/react'
function App() {
const [htimer, setHtimer] = useState(true);
const [hstopWatch, setHstopWatch] = useState(false)
const handleTimer = ()=>{
  setHtimer(true)
  setHstopWatch(false)
}
const handleStopWatch = ()=>{
  setHstopWatch(true)
  setHtimer(false)
}
  return (
    <div className='main'>
  <Heading className='head' size='md'>Stop Watch and Timer</Heading>
    <div className="App">
      
      <div className='subcon'>
      <h2 onClick={handleTimer}>TIMER</h2>
      <h2 onClick={handleStopWatch}>STOP WATCH</h2>
      </div>
      <Divider />
      <div className='content'>
      {hstopWatch? <StopWatch/>:null} 
       {htimer? <Timer/>:null }
       </div>
    </div>
    </div>
  );
}

export default App;
