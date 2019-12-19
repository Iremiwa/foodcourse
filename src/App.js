import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SIgnIn';
import Register from './Components/Register';


function App() {
  return (
    <Router>

      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/register" exact component={Register} />

    </Router>
  );
}

export default App;
