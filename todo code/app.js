import React, { useState } from "react";
import Form from "./components/form";
import "./style.css";
import Todo from "./components/todo";

const App = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  return (
    <body>
      <div className="app-div">
        <Form text={text} setText={setText} data={data} setData={setData} />
        <Todo text={text} setText={setText} data={data} setData={setData} />
      </div>
    </body>
  );
};
export default App;
