import React, { Component } from 'react';
import ShadowedGoo from './ShadowedGoo';
import { Link } from 'react-router-dom';
import './Menu.css';

export default class Menu extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.querySelector('#menu-open').checked = false;
  }

  render() {
    return (
      <div className="menu-container">
        <nav className="menu">
          <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="hamburger hamburger-1"></span>
            <span className="hamburger hamburger-2"></span>
            <span className="hamburger hamburger-3"></span>
          </label>
          <Link className="menu-item" to="/" onClick={this.handleClick}>
            <i className="fa fa-random" aria-hidden="true"></i>
          </Link>
          <Link className="menu-item" to="/users" onClick={this.handleClick}>
            <i className="fa fa-users" aria-hidden="true"></i>
          </Link>
          <Link className="menu-item" to="/tasks" onClick={this.handleClick}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </Link>
        </nav>
        <ShadowedGoo />
      </div>
    );
  }
}
