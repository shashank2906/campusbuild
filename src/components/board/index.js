import React, { useEffect, useRef, useState } from "react";
import Styles from "./index.module.css";

export default function Board() {
  const [inputlist, setlist] = useState(
    localStorage.getItem("projectTasks")
      ? JSON.parse(localStorage.getItem("projectTasks"))
      : []
  );
  const [input, setinput] = useState("Add a Task");

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

      <div className={Styles.bottom}>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Campus Build</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Add Task</label>
            <input type="text" class="form-control" id="recipient-name" onSubmit={modalchange}
            onChange={(e) => setinput(e.target.value)}
            value={input} />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Details</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" onClick={modalchange} data-bs-dismiss="modal" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
<button type="button" className={Styles.inputbtnbottom} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">+</button>
      {/* <button
            type="button"
            className={Styles.inputbtnbottom}
            onClick={modalchange}
          >
            +
          </button> */}


      </div>

      
      
    </div>
  );
}
