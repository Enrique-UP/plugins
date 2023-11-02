import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <ul style={{"marginTop":"1000px"}}>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/about" exact activeClassName="active">About Us</NavLink>
        <NavLink to="/contact" exact activeClassName="active">Contact Us</NavLink>
      </ul>
    </>
  );
}
export default Header;
