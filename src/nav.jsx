import React from 'react';
import { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li>Journals</li>
          <li>Interactions</li>
          <li>Entries</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
