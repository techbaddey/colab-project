import React from "react";
import { NavLink } from "react-router-dom";


function Header () {
    return (
  <div className="header">
    <p> <NavLink to="/">Home</NavLink></p>
    <p><NavLink to="/projects">Project</NavLink></p>
    <p><NavLink to="/quotes">Quotes</NavLink></p>
</div>
    );
}

export default Header;