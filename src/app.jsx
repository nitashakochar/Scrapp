import React, { Component } from "react";
import Entry from "./entry";
import Nav from "./nav";
import Home from "./home";
import Create from "./create";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";
import EntryList from "./entryList";

// for writing to and reading from file
var fs = require('fs');
var filename = process.cwd() + "/entries.json";


const entryData = {
  date: 'April 8, 2019',
  people: ["Anna", "Shep"],
  places: ["Dartmouth", "Thayer"],
  journals: ["happy", "major"],
  tags: ["stress", "fun"],
  content: "Today is a great day. I sat in Thayer all day and had a blast.",
  title: "Hackathon",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Thayer_School_of_Engineering_shield.svg/1920px-Thayer_School_of_Engineering_shield.svg.png"
};

const entries = [
  {
    people: ['Nitasha', 'Regina'],
    places: ['Spanos', 'Hitchcock'],
    journals: ['sad', 'major'],
    tags: ['stress', 'fun'],
    title: 'first entry',
    content: 'hello world',
  },
  {
    people: ['Nitasha', 'Regina'],
    places: ['Thayer', 'Hitchcock'],
    journals: ['sad', 'major'],
    tags: ['stress', 'fun'],
    title: 'second entry',
    content: 'hello world',
  },
];

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      all: [],
      loaded: false,
    }
  }

  componentWillMount() {
    // fs.writeFile(filename, JSON.stringify(entries), function (err) {
    //   if (err) throw err;
    //   console.log(filename);
    // });
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) throw err;
      let allE = JSON.parse(data);
      this.setState({all: allE, loaded: true});
    });

  }

  render() {
    if (this.state.loaded) {
       return (
          <HashRouter>
          <div>
          <Nav></Nav>
          <div className="right-side">
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
          </div>
              <EntryList />
              <h2>Welcome to React!</h2>
              <button color="blue" shadowSize={2}>
                Click Me
              </button>
              <Entry display="full" entry={entryData} />
              <Entry display="cover" entry={this.state.all[1]}/>
              </div>
            </HashRouter>
          );
    }
    else {
      return(<div>Loading...</div>);
    }
  }
}
