import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoList } from './TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de Intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Bailar en marte', completed: !false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      // const searchText = searchValue.toLowerCase();
      return todoText.includes(searchValue.toLowerCase());
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <div className="container-comp">
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => { completeTodo(todo.text) }}
              onDelete={() => { deleteTodo(todo.text) }}
            />
          ))}
        </TodoList>
      </div>
      <style>
        {`
          .container-comp {
            width: 70vw;
            margin: 0 auto;
            height: 100vh;
          }
          @media 
        `}
      </style>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
