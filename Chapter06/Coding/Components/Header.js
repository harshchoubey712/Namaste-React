import React from 'react';
import { LOGO_URL } from '../../utils/constants';// Importing LOGO_URL from constants
import { useState } from 'react';

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
