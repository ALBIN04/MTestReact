import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Todo/>}/>
      </Routes>
    </>
  )
}

export default App
