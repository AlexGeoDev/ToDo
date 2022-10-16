import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
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
              {searchedTodos?.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text) }
                onDelete={() => deleteTodo(todo.text) }
              />
            ))}
          </TodoList>
        </div>
        <CreateTodoButton />
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
      </React.Fragment>
    );
}

export {AppUI};