import React, { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Variante from "./Components/Variante";

function App() {

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/dashboard/:id" component={Variante} />
                </Switch>
            </div>
        </Router>
    )
};

export default App;