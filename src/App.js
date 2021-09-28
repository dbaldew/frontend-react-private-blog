import React, {useState} from 'react';
import './App.css';
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Blogposts from "./Components/Pages/Blogposts";
import Blog from "./Components/Pages/Blog";
import Header from "./Components/Header/Header";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (

        <Router>
            <div className="App">
                <logo className="App-logo">
                    logo
                </logo>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/blogposts">
                        <Blogposts/>
                    </Route>
                    <Route path="/blog:id">
                        <Blog/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
