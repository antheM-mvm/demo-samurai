import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

// react v6
const setActive = ({ isActive }) => {
  return {
    color: isActive ? "gold" : "",
  };
}

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" style={setActive}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" style={setActive}>Messages</NavLink>
      </div><div className={s.item}>
        <NavLink to="/users" style={setActive}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' style={setActive}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' style={setActive}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' style={setActive}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;