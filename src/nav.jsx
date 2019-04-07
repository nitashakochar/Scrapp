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
		  <li><NavLink to="/">Home</NavLink></li>
		  <li><NavLink to="/create">Create</NavLink></li>
		  <li><NavLink to="/entries">All Entries</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
