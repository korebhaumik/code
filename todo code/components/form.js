import React from "react";
import { useState } from "react";

const Form = ({ text, setText, data, setData }) => {
  const handleAdd = (event) => {
    setText(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setData((ps) => {
      return [
        ...ps,
        { text: text, completed: false, id: Math.random() * 1000 },
      ];
    });
    setText("");
  };

  const handleClear = (event) => {
    event.preventDefault();
    setText("");
    setData([]);
  };
  return (
    <>
      <nav>
        <form className="form">
          <input
            placeholder="Enter Task"
            value={text}
            name="task"
            onChange={handleAdd}
            className="form-input"
          />

          <button onClick={handleClick} className="form-add">
            +{/* <i className="gg-add-r"></i> */}
          </button>
          <button onClick={handleClear} className="form-clear">
            Clear List
          </button>
        </form>
      </nav>
      {/* <div>
        <h1>{text.task}</h1>
      </div> */}
    </>
  );
};
export default Form;
