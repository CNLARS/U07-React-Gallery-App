import React from "react";
import { NavLink } from "react-router-dom";

// Nav: for the apps' navigation links

const Nav = (props) => {
    return ( 
        <div>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/sun">Sun</NavLink></li>
                    <li><NavLink to="/moon">Moon</NavLink></li>
                    <li><NavLink to="/stars">Stars</NavLink></li>
                </ul>
            </nav>
        </div>
            );
}

export default Nav;