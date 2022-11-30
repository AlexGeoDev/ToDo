import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
      <div className='LoadingTodo-container'>        
        <p className='LoadingTodo-text'>Cargando ToDos...</p>
      </div>
    )    
}

export { TodosLoading };