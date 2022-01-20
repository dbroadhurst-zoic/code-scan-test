import React from 'react'
import logo from './logo.svg'
import './App.css'

const passwordTest = '!1234!'
const tokenTest = '6542143b-d9eb-47fb-bcd5-4625e1fc78d2'
const myNumber = 010

function App() {
  console.log(passwordTest)
  console.log(tokenTest)
  console.log(myNumber)

  eval("console.log('eval')")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
