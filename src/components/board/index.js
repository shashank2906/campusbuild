import React, { useEffect, useRef, useState } from "react";
import Styles from "./index.module.css";

export default function Board() {
  const [inputlist, setlist] = useState(
    localStorage.getItem("projectTasks")
      ? JSON.parse(localStorage.getItem("projectTasks"))
      : []
  );
  const [input, setinput] = useState("");

  const modalchange = () => {
    if (input === "") alert("Empty Fields");
    else {  
      localStorage.setItem("projectTasks", JSON.stringify([...inputlist, input]));
      setlist((olditems) => {
        return [...olditems, input];
      });
      setinput("");
    }
  };

  const deleteItem = (indexGiven) => {
      const newData = inputlist.filter((item, index) => index!== indexGiven);
      localStorage.setItem("projectTasks" , JSON.stringify(newData));
      setlist(newData);
  }

  return (
    <div className={Styles.containerTop}>
      <div className={Styles.wrapper}>
        <div>
          <h1 className={Styles.heading}>My Tasks</h1>
          <button
            type="button"
            className={Styles.inputbtn}
            onClick={modalchange}
          >
            +
          </button>
          <input
            className={Styles.placeholder}
            type="text"
            onSubmit={modalchange}
            onChange={(e) => setinput(e.target.value)}
            value={input}
            placeholder="Add a task"
          />
          <ul>
            {inputlist.map((itemval, index) => {
              return <li key={index}>{itemval} <button onClick={() => deleteItem(index)}>delete</button></li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
