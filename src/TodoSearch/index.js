import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  );
}

export { TodoSearch };