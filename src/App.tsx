import React from 'react'
import logo from './logo.svg'
import './App.css'

const passwordTest = '!1234!'
const tokenTest = '6542143b-d9eb-47fb-bcd5-4625e1fc78d2'
const myNumber = 010

function App() {
  console.log(passwordTest)
  console.log(tokenTest)

  eval("console.log('eval')")

  for (
    var i = 1;
    i != 10;
    i += 2 // Noncompliant. Infinite; i goes from 9 straight to 11.
  ) {
    console.log(i)
  }

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
