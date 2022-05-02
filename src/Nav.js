import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({colors}) => {
    const colorLink = colors.map((c) => (<NavLink exact to={`/colors/${c.colorName}`} className="Nav" key={uuidv4()}>{c.colorName}</NavLink>))
    
  return (
    <nav className="Nav">
      <NavLink exact to="/colors" className="Nav">
        Home
      </NavLink>
      <NavLink exact to="/colors/new" className="Nav">
        Add Color
      </NavLink>
      {colorLink}
    </nav>
  );
}

export default Nav;