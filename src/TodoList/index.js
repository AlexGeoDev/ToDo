import React from "react";
import './TodoList.css';

function TodoList(props) {

  return (
    <section>
      <ul className="ul">
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };