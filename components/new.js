import React from "react";
import { useState } from "react";

const nums = ["alice", "bob", "martin"];

export default function New() {
  const [Value, setValue] = useState(0);
  const increase = () => {
    setValue(Value + 1);
  };
  const decrease = () => {
    if (Value <= 0) {
      alert("Value dekh");
    } else setValue(Value - 1);
  };

  return (
    <>
      <div className="new--div">
        <button className="btn" onClick={increase}>
          +
        </button>
        <h1 className="new--value">{Value}</h1>
        <button className="btn" onClick={decrease}>
          -
        </button>
      </div>
    </>
  );
}
