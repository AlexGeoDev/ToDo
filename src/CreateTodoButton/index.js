//import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import './CreateTodoButton.css';
import { MdOutlineAddCircleOutline } from 'react-icons/md'

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  }
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      <MdOutlineAddCircleOutline />      
    </button>
  );
}

export { CreateTodoButton };