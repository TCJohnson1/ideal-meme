import React, {useState} from 'react'
import Input from './Input'

function ToDoList() {
      const [todos, setTodos] = useState([])
      return (
            <div>
                  <h1>What do you want to do?</h1>
                  <Input />
            </div>
      )
}

export default ToDoList
