import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Information from "./components/information"
import List from "./components/inventory-list"
import Update from "./components/modify-list"
import Create from "./components/create-item"
import Remove from "./components/remove-item"
import SignUp from './SignUp';
import SignIn from "./SignIn";

// Importing logo
import logo from "./Photoes/123.png"

function App() {
  return (
    <Router>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{marginBottom: "20px"}}>
          <a className="navbar-brand">
          <img src={logo} width="60" height="30" alt="https://medium.com/@its.martin.beck" />
          </a>
          <Link to="/" className="navbar-brand">MyInvento</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/list" className="nav-link">Inventory</Link>
              </li>
              <li className="navbar-item">
                <Link to="/update" className="nav-link">Update</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Items</Link>
              </li>
              <li className="navbar-item">
                <Link to="/remove" className="nav-link">Remove Items</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
            <li className="navbar-item" >
                <Link to="/signup" className="nav-link">Sign up</Link>
              </li>
              <li className="navbar-item">
                <Link to="/signin" className="nav-link">LogIn</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={Information} />
        <Route path="/list" exact component={List} />
        <Route path="/update/" component={Update} />
        <Route path="/create/" component={Create} />
        <Route path="/remove/" component={Remove} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />


    </Router>
      );
}

export default App;
