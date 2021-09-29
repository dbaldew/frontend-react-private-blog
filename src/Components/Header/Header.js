import React from "react";
import {NavLink} from "react-router-dom";

function Header() {

    return (
        <header className="App-header">
            <nav>
                <ul className="nav">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blogposts">Blogposts</NavLink>
                    </li>
                    <li>
                       <NavLink to="/login">Login</NavLink>

                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

