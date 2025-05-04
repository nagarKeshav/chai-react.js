import { useContext, createContext, useState } from 'react';

// Create the context with default values
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: 'todo msg',
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider =  TodoContext.Provider