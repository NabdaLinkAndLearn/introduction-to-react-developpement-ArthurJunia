import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/logo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Logo logo={viteLogo} alt={"Logo Vite"} href={"https://vite.dev"} className="vite"  />
        <Logo logo={reactLogo} alt={"Logo react"}  className= "react" href={"https://react.dev"} />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
