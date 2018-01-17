import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from '../Menu/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Shuffle from '../Shuffle/Shuffle';
import Users from '../Users/Users';
import Tasks from '../Tasks/Tasks';

export default class App extends Component {

  render() {
    
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Menu />
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <Route exact path="/" component={Shuffle} />
          <Route path="/users" component={Users} />
          <Route path="/tasks" component={Tasks} />
        </div>
      </Router>
    );
  }
}
