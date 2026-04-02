import { useState } from 'react'
import './App.css'
import Box from './component/Box.jsx'

function App() {
  let count = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    setCounter2(counter2 + 1);
  }
  return (
    <div>
      <Box name="리사" num={1} />
      <Box name="제니" num={2} />
      <Box name="지수" num={3} />
      <div>
        <p>count: {count}</p>
        <p>state: {counter2}</p>
        <button onClick={increase}>클릭</button>
      </div>
    </div>
  )
}

export default App
