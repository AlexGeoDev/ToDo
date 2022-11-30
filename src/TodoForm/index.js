import React, { useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
const [newTodoValue, setNewTodoValue] = useState('');

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }
  
  const onCancel = () => {
    setOpenModal(false);    
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

    return(
      <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo ToDo</label>
        <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder='Cortar la cebolla para el almuerzo'
          />
        <div className='TodoForm-buttonContainer'>
          <button 
              type='button'
              className='btn btn-secondary TodoForm-button TodoForm-button--cancel'
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button 
              type='submit'
              className='btn btn-primary TodoForm-button TodoForm-button--add'
            >
              Añadir
            </button>
        </div>
      </form>
    );
}

export { TodoForm };