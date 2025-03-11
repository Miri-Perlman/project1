import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'
import Father from './components/Father'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Father></Father>
    </>
  )
}

export default App
