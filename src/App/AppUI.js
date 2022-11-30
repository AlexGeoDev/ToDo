import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosEmpty } from '../TodosEmpty'
import { TodosError } from '../TodosError'
import { TodosLoading } from '../TodosLoading'
import './App.css';

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return(
    <React.Fragment>
      <div className="container-comp">
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {error && <TodosError />}
          {loading && <TodosLoading />}
          {(!loading && !searchedTodos.length) && <TodosEmpty />}
          
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

        <div className='todoButton'>
          <CreateTodoButton
          setOpenModal={setOpenModal}
        />
        </div>
        
      </div>
    </React.Fragment>
  );
}

export { AppUI };