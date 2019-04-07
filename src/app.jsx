import React, { Component } from "react";
import Entry from "./entry";
import Nav from "./nav";
import Home from "./home";
import Create from "./create";
import Entries from "./entries";
import { Route, NavLink, HashRouter } from "react-router-dom";
import EntryList from "./entryList";

// for writing to and reading from file
var fs = require("fs");
var filename = process.cwd() + "/entries.json";

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

const entries = [
  {
    people: ["Elijah", "Quinn", "Sophie"],
    places: ["Rye, NH", "beach"],
    journals: ["surfing"],
    tags: ["fun", "surfing"], 
    title: "Sunday Surf Session",
    content: "Slow start to the day, but got to Rye around 1. Lots of fun little waist high waves at Rye rocks.",
    date: new Date("March 31, 2019 11:13:00"),
  },
  {
    people: ["Regina"],
    places: ["Thayer"], 
    journals: [], 
    tags: ["day-to-day", "climbing"], 
    title: "", 
    content: "Just a simple Monday. Ledyard council was hilarious with the April Fool's style bs intro question.",
    date: new Date("April 1, 2019 11:13:00"),
  },
  {
    people: ["Nat", "Mer"],
    places: ["Tom Dent"],
    journals: [], 
    tags: ["day-to-day"], 
    title: "Typical Tuesday - DHE & Climbing", 
    content: "Mer and Kevin cooked a DHE dinner at Tom Dent. It was a nice change of pace, though there was some friction with cleaning. I went climbing after and had a good time, bunch of SkiPa people there and my shoulder/elbow hurt a bit, but I got some good climbs in.",
    date: new Date("April 2, 2019 11:13:00"),

  },
  {
    people: ["Nitasha", "Regina"],
    places: ["Spanos", "Hitchcock"],
    journals: ["sad", "major"],
    tags: ["stress", "fun"],
    title: "first entry",
    content: "Hi Hi just another day, but a Wednesday. Stayed in my room sick all day.", 
    date: new Date("April 3, 2019 11:13:00"),
  },
  {
    people: ["Nitasha"],
    places: ["Thayer", "Hitchcock"],
    journals: ["sad", "major"],
    tags: ["stress", "fun"],
    title: "second entry",
    content: "Still sick today, but I dragged myself to CS52.",
    date: new Date("April 4, 2019 11:13:00"),
  },
  {
    people: [],
    places: ["Rye, NH", "beach"],
    journals: ["surfing"], 
    tags: ["fun", "outside"],
    title: "Surf Break",
    content: "No class today so I went surfing in Rye with Jesse and Elijah. It was a fun trip and a lot cheaper since Jesse has a Prius. The waves started off great, then the wind went onshore as we changed, but after around 45 min it went turned to a whipping offshore wind. The waves were great for an hr and I got some cover on one. Then we went to Rye Rocks where it looked small, but was pretty solid shoulded/head high. Caught a couple here, but it was fun.",
    date: new Date("April 5, 2019 11:13:00"),
  },
  {
    people: ["Anna"],
    places: ["Foco", "Thayer"],
    journals: ["sad", "major"],
    tags: ["stress", "fun"],
    title: "",
    content: "Today I had no class, but I did hold office hours for ENGS 20 and go to Council. It was a relaxing and pleasant day.",
    date: new Date("April 6, 2019 11:13:00"),
  }
];


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      all: [],
      loaded: false
    };
  }

  componentWillMount() {
    fs.writeFile(filename, JSON.stringify(entries), function (err) {
      if (err) throw err;
      console.log(filename);
    });
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) throw err;
      let allE = JSON.parse(data);
      this.setState({ all: allE, loaded: true });
      console.log(this.state.all.length);
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <HashRouter>
          <div className="app">
            <Nav />
            <div className="right-side">
              <Route exact path="/" component={Home} />
              <Route path="/create" component={Create} />
              <Route path="/entries" component={Entries} />
              <EntryList />
            </div>
           
          </div>
        </HashRouter>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
