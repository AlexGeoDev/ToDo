import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    console.log(msg);
  }
  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton('clic')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };