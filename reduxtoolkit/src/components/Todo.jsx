import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../feature/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleUpdateTodo = (id, text) => {
      const newText = prompt('enter new text' , text)
      if(newText && newText.trim !== ''){
        dispatch(updateTodo({id, text: newText}))
      }
    }

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.id}
        >
          <div className="text-white">{todo.text}</div>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              🗑️
            </button>
            <button
              onClick={() => handleUpdateTodo(todo.id, todo.text)}
              className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
            >
              ✏️
            </button>
          </div>
        </li>
        
        ))}
      </ul>
    </>
  )
}

export default Todos