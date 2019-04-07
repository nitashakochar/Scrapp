import React from 'react';
import { Component } from 'react';
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul>
		  <li><NavLink to="/create">Home</NavLink></li>
		  <li><NavLink to="/">Create</NavLink></li>
          <li>Something</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
