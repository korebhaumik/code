import React from "react";
import { useState } from "react";

export default function Todo({ data, setData }) {
  const [s, setS] = useState();
  const print = data.map((i) => {
    const handleCross = () => {
      setData(data.filter((el) => el.id !== i.id));
    };

    const handleCheck = () => {
      setData(
        data.map((item) => {
          if (item.id === i.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          } else return item;
        })
      );
    };

    return (
      <div className="container" key={i.id}>
        <p className={i.completed ? "s" : ""}>{i.text}</p>
        <button className="btn">
          <i className="gg-check" onClick={handleCheck}></i>
        </button>
        <button className="btn" onClick={handleCross}>
          <i className="gg-close"></i>
        </button>
      </div>
    );
  });
  return (
    <>
      <div className="big">{print}</div>
    </>
  );
}
