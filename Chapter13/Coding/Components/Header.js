import React from "react";
import { LOGO_URL } from "../../utils/constants"; // Importing LOGO_URL from constants
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName="Login";
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  console.log("Header rendered");

  return (
    <div className="flex  justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 ">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🐸" : "👹"}</li>

          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/About">About Us</Link>
          </li>

          <li className="px-4">
            <Link to="/Contact">Contact Us</Link>
          </li>

          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>

          <li className="px-4 font-bold text-xl">
            <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");

              //    console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
