import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='weather-container'>
      <input type="text" className="cityInput" id="" />
      </div>
    </>
  )
}

export default App
