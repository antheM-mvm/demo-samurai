import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <svg width="60" height="60" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30 0C13.4315 0 0 13.4315 0 30V86C0 102.569 13.4315 116 30 116H86C102.569 116 116 102.569 116 86V30C116 13.4315 102.569 0 86 0H30ZM88.4489 66.3153C87.5966 81.358 76.6449 91.5852 59.2159 91.5852C39.0597 91.5852 27 77.7358 27 57.8352C27 37.7642 39.2727 24 59.1307 24C76.2188 24 87.6818 33.929 88.4489 49.0568H71.3182C70.3381 42.5369 66.0767 38.1477 59.429 38.1477C50.9915 38.1477 45.4517 45.2216 45.4517 57.5795C45.4517 70.108 50.9489 77.2244 59.429 77.2244C65.6506 77.2244 70.2528 73.304 71.3182 66.3153H88.4489Z" fill="url(#paint0_linear_2_12)"/>
        <defs>
        <linearGradient id="paint0_linear_2_12" x1="-8.38023" y1="-1.40074e-05" x2="125.66" y2="5.8515" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7C6AF3"/>
        <stop offset="1" stop-color="#44A5F5"/>
        </linearGradient>
        </defs>
      </svg>
      <div className={s.loginBlock}>
        { props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  );
}

export default Header;