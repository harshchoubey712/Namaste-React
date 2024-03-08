import React from 'react';
import { LOGO_URL } from '../../utils/constants';// Importing LOGO_URL from constants
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
 // let btnName="Login";
  const [btnNameReact,setbtnNameReact]=useState("Login");
  console.log("Header rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          
          <li>
          <Link to="/">Home</Link>
          </li>
          
          <li>
          <Link to="/About">About Us</Link>
          </li>

          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>

          <li>Cart</li>
          <button 
            className="login" 
            onClick={() => {
              btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
            
        //    console.log(btnNameReact);
            }}
            >
          {btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
