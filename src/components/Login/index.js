import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import Styles from "./index.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedUser") ? true : false;

  const handlesubmit = () => {
    if (email === "" || pass === "") {
      alert("Empty fields");
    } else {
      localStorage.setItem("loggedUser", { email, pass });
      window.location.reload(false);
    }
  };
  
  useEffect(() => {
    if(localStorage.getItem("loggedUser")!== null)
      navigate("/board")
  }, [])

  return (
    <>
      <div className={Styles.wrapper}>
        <h1 className={Styles.heading}>Log in!</h1>
        <div className={Styles.inwrap}>
          <div className={Styles.form_control}>
            <label className={Styles.text} htmlFor="email">
              Email
            </label>
            <input
              className={Styles.inp}
              type="text"
              placeholder="Enter Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={Styles.form_control}>
            <label className={Styles.text} htmlFor="">
              Password
            </label>
            <input
              className={Styles.inp}
              type="password"
              placeholder="Enter password"
              onChange={e => setPass(e.target.value)}
            />
          </div>
        </div>

        <div className={Styles.inwraprow}>
          <div className={Styles.element1}>
            <input className={Styles.inpbox} type="checkbox" />
            <label className={Styles.labelin} htmlFor="">
              Remember me
            </label>
          </div>

          <div className={Styles.element2}>
            {/* <a href="#">Forgot Password</a> */}
          </div>
        </div>

        <button className={Styles.btn} onClick={handlesubmit}>Log in</button>
        <div>Do not have any account ? <Link to="/signup">SignUp</Link></div>
      </div>
    </>
  );
}

export default Login;
