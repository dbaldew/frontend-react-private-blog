import React from "react";
import {Link} from "react-router-dom";

function Header() {

    return (
        <header className="App-header">
            <nav>
                <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blogposts">Blogposts</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

