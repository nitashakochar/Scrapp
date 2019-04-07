import React, { Component } from "react";
import Entry from "./entry";
import Nav from "./nav";
import Home from "./home";
import Create from "./create";
import { Route, NavLink, HashRouter } from "react-router-dom";

import EntryList from "./entryList";

const entryData = {
  date: "April 8, 2019",
  people: ["Anna", "Shep"],
  places: ["Dartmouth", "Thayer"],
  journals: ["happy", "major"],
  tags: ["stress", "fun"],
  content: "Today is a great day. I sat in Thayer all day and had a blast.",
  title: "Hackathon",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Thayer_School_of_Engineering_shield.svg/1920px-Thayer_School_of_Engineering_shield.svg.png"
};

export default class App extends React.Component {
  render() {
	  return (
		<HashRouter>
		<div>
		<Nav></Nav>
		<div className="right-side">
			<Route exact path="/" component={Home} />
			<Route path="/create" component={Create} />
			<Route path="/entries" component={Entries} />
		</div>
        <EntryList />
			  </div>
		  </HashRouter>
    );
  }
}
