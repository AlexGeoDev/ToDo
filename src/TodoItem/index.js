import React from "react";
import './TodoItem.css';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsCheck2 } from 'react-icons/bs'

function TodoItem({completed, onComplete, text, onDelete}) {

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${!completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        <BsCheck2 />
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        <RiDeleteBin6Line />
      </span>
    </li>
  );
}

export { TodoItem };