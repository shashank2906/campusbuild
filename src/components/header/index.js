import React, { useEffect, useState } from 'react';
import Styles from './index.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Header() {
  const [imgdata, setImgData] = useState('');
  const [url, setUrl] = useState(
    `https://picsum.photos/id/${Math.ceil(Math.random() * 100)}/info`
  );

  const fetchImage = async () => {
    const res = await axios.get(url);
    setImgData(res.data.download_url);
    console.log(res.data);
  };
  const navigate = useNavigate();
  const logoutHandler = () => {
    if (localStorage.getItem('loggedUser') !== null) {
      localStorage.removeItem('loggedUser');
      navigate('/login');
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <div className={Styles.wrapper}>
        <h1 className={Styles.heading}>TasksBoard</h1>
        <div class='dropdown'>
          <a
            class=''
            href='#'
            role='button'
            id='dropdownMenuLink'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <img className={Styles.profile} src={imgdata} alt='pfp' />
          </a>

          <ul class='dropdown-menu' aria-labelledby='dropdownMenuLink'>
            <li>
              <a class='dropdown-item' href='#'>
                Profile
              </a>
            </li>
            <li>
              <a onClick={logoutHandler} class='dropdown-item' href='#'>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
