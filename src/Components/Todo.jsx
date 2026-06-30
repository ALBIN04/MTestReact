import React from 'react'
import './Todo.css'

const Todo = () => {
  return (
    <div>
      <div className='main'>
        <h1 className='hd1'>TO-DO</h1>
        <form action="#" className='todo_form' id='form'>
            <input type="text" className='input-form' placeholder='Enter Your Task' name="" id="" />
            <button className='input-form button' type='submit'>ADD</button>
            <p className='input-form par'></p>
            <div id='list'></div>
        </form>
      </div>
    </div>
  )
}

export default Todo
