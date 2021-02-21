import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/form'
import List from './components/list'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break
        default:
          setFilteredTodos(todos)
          break
      }
    }
    filterHandler()
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>The List</h1>
        <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}  />
        <List setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
      </header>
    </div>
  );
}

export default App;
