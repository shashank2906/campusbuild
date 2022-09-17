import React, { useState } from 'react'
import styled from 'styled-components';
import Styles from "./index.module.css";

export default function Board()
{
  const [ inputlist, setlist ] = useState("taskA");
  const [ input, setinput ] = useState([]);

  const modaltoggle = (event) =>
  {
    setlist(event.target.value);
  }

  const modalchange = () =>
  {
    setinput((olditems) =>
    {
      return [ ...olditems, inputlist ];
    })

  }


  return (
    <>
      <Wrapper>
        <Container>
          <h1 className={Styles.heading}>My Tasks</h1>
          <button type="button" className ={Styles.inputbtn} onClick={modalchange}> + </button>
          <input className={Styles.placeholder} type="text" onChange={modaltoggle} placeholder = "Add a Task"/>
          <ul>
            {input.map((itemval) =>
            {
              return <li>{itemval}</li>
            })}
          </ul>
        </Container>
      </Wrapper>
    </>
  )
}


const Container = styled.div`

border: 2px solid #5072A7;
height: 50vh;
width: 30vw;
margin: 60px;

`;

const Wrapper = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
display: flex;
`;

