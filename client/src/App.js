import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import LiveStream from "./Components/LiveStream";
import './App.css';

import Dashboard from "./Components/dashboard/Dashboard";

function App() {
  return (
    
      <Router>
        <Route path="/" exact component={Home} />
        
        <Route path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>

        <Route path="/live" component={LiveStream} />
      </Router>
    
  );
}

export default App;
