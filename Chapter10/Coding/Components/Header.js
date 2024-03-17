import React from 'react';
import { LOGO_URL } from '../../utils/constants';// Importing LOGO_URL from constants
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';


const Header = () => {
 // let btnName="Login";
  const [btnNameReact,setbtnNameReact]=useState("Login");

  const onlineStatus= useOnlineStatus();

  console.log("Header rendered");

  return (
    <div className="flex  justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 ">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">

        <li className='px-4'>
          Online Status: {onlineStatus? "🐸" : "👹" }
         </li>
          
          <li className='px-4'>
          <Link to="/">Home</Link>
          </li>
          
          <li className='px-4'>
          <Link to="/About">About Us</Link>
          </li>

          <li className='px-4'>
            <Link to="/Contact">Contact Us</Link>
          </li>

          <li className='px-4'>
            <Link to="/Grocery">Grocery</Link>
          </li>

          <li className='px-4'
          >Cart</li>
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
