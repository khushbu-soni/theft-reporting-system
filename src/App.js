import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import Report from './Components/Report';



function App() {
  return (
    <Router>
    <div className="container">
    <h2>Welcome to Theft Reporting System</h2> <br/>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/'} className="navbar-brand"></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={'/'} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/Report'} className="nav-link">
                Report
              </Link>
            </li>
           </ul>
        </div>
      </nav> <br/>
      <Switch>
          <Route exact path='/home' component={ Home } />
          <Route path='/report' component={ Report } />
      </Switch>
    </div>
  </Router>
    
  );
}

export default App;
