import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import AboutMe from './components/AboutMe';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/about" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink exact to="/weather" activeClassName="active">Weather</NavLink>
              </li>
            </ul>
          </header>


          <Route exact path="/" render={(props) => <div>We are home!</div>}/>
          <Route exact path="/about" render={(props) => <AboutMe {...props} />}/>
          <Route exact path="/weather" render={(props) => <div>Weather search</div>}/>
        </Router>
      </div>
    );
  }
}

export default App;
