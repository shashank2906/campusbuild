import React, { useState } from 'react';
import Styles from './index.module.css';

export default function Board() {
  const [inputlist, setlist] = useState('taskA');
  const [input, setinput] = useState([]);

  const modaltoggle = (event) => {
    setlist(event.target.value);
  };

  const modalchange = () => {
    setinput((olditems) => {
      return [...olditems, inputlist];
    });
  };

  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <h1 className={Styles.heading}>My Tasks</h1>
          <button
            type='button'
            className={Styles.inputbtn}
            onClick={modalchange}
          > +
          </button>
          <input
            className={Styles.placeholder}
            type='text'
            onChange={modaltoggle}
            placeholder='Add a Task'
          />
          <ul>
            {input.map((itemval) => {
              return <li>{itemval}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
