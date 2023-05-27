import "./NavbarStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
const [Click, setClick] = useState(false);
const handleClick = ()=> setClick(!Click);

const [color, setcolor] = useState(false);

const changeColor = ()=>{
  if(window.scrollY >= 100){
    setcolor(true);
  }
  else{
    setcolor(false);
  }
}

window.addEventListener("scroll", changeColor);

  return (
    
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 className="logo">Pranav Kumar</h1>
      </Link>
      <ul className={Click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {Click ? (<FaTimes size={20} style={{color : "#fff"}}/>) : 
        (<FaBars size={20} style={{color : "#fff"}}/>)}
         </div>
    </div>
  );
};

export default Navbar;
