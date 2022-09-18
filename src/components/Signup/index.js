import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Styles from "./index.module.css";

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = () => {
    if (!name || !email || !pass) {
      console.log("error");
    } else {
      localStorage.setItem("loggedUser",{
        name, 
        email,
        pass
      })
      console.log("saved in localstorage");
    }
  };

  useEffect(() => {
    if(localStorage.getItem("loggedUser")!== null)
      navigate("/board")
  }, [])
  

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className={Styles.wrapper}>
          <h1 className={Styles.heading}>Sign up!</h1>
          <div className={Styles.inwrap}>
            <div className={Styles.form_control}>
              <label className={Styles.text}>Username</label>
              <input
                className={Styles.inp}
                type="text"
                placeholder="Enter Email address"
                onChange={(event) => {
                  setname(event.target.value);
                }}
              />
            </div>

            <div className={Styles.form_control}>
              <label className={Styles.text}>Email</label>
              <input
                className={Styles.inp}
                type="text"
                placeholder="Enter password"
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              />
            </div>

            <div className={Styles.form_control}>
              <label className={Styles.text}>Password</label>
              <input
                className={Styles.inp}
                type="text"
                placeholder="Enter Email address"
                onChange={(event) => {
                  setpass(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={Styles.inwraprow}>
            <div className={Styles.element1}>
              <input className={Styles.inpbox} type="checkbox" />
              <label className={Styles.labelin} htmlFor="">
                I accept the terms and conditions
              </label>
            </div>
          </div>

          <button className={Styles.btn}>Sign up</button>
          <div className={Styles.text}>Already have an account ? <Link to="/login"><h5 className={Styles.text_style}>Login</h5></Link></div>
        </div>
      </form>
    </>
  );
}

export default Signup;
