import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = ({isAuth, login, logout}) => {
    return <header className={s.header}> 
   <img alt="" src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/app-logo-design-template-5ceda3418eba54b040875a86d7e7b8ec_screen.jpg?ts=1573502884'/>
   <div className={s.authName}>
     {isAuth 
       ? <div> {login} - <button onClick={logout}>Log out</button> </div>
       : <NavLink to='/login'> Login </NavLink>} 
   </div>
  </header>
}

export default Header;
