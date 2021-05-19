import React, { useState } from 'react';
import Container from './Components/Container/Container';
import NavBar from './Components/Navbar/Navbar';
import ToDoList from './Components/ToDoList/ToDoList';
import { ITodo } from './interfaces';
import './index.css'


function App() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const removeHandler = (id: number) => {
      setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <NavBar />
      <Container onAdd={addHandler} />
      <ToDoList todos={todos} onRemove={removeHandler} />
    </>
  );
}

export default App;
