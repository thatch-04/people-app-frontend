import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Main />

    </div>
  )
}

export default App
