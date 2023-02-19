import { useState } from 'react'
import Board from './components/board'
import Profile from './components/profile'
import "./components/style.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" id='main'>
      <Board />
    </div>
  )
}

export default App
