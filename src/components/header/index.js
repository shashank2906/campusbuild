import React, { useEffect, useState } from "react";
import Styles from "./index.module.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Header() {
  const [imgdata, setImgData] = useState("");
  const [url, setUrl] = useState(
    `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/info`
  );

  const fetchImage = async () => {
    const res = await axios.get(url);
    setImgData(res.data.download_url);
    console.log(res.data);
  };
  const navigate = useNavigate()
  const logoutHandler = () =>{
    localStorage.removeItem("loggedUser");
    navigate("/login");
  }

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <div className={Styles.wrapper}>
        <h1 className={Styles.heading}>TasksBoard</h1>
        <img className={Styles.profile} src={imgdata} alt="pfp" />
        {localStorage.getItem("loggedUser")!==null ? <Button onClick={logoutHandler}>LogOut</Button> : null}
      </div>
    </>
  );
}
