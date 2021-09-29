import React, {useState} from 'react';
import './App.css';
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Blogposts from "./Components/Pages/Blogposts";
import Header from "./Components/Header/Header";
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import Blog from "./Components/Pages/blog";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);


    function login() {
        toggleIsAuthenticated(true);
        console.log(isAuthenticated)
    }

    function logout () {
        toggleIsAuthenticated(false);
        console.log(isAuthenticated)
    }


    return (
        <Router>
            <div className="App">
                <Header
                    loggedIn={isAuthenticated}
                />
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/blogposts">
                        <Blogposts/>
                    </Route>
                    <Route path="/blog/:id">
                        <Blog/>
                    </Route>
                    <Route path="/login">
                        <Login
                            onClick={login}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
