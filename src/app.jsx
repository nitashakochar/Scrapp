import React from "react";
import Entry from "./entry";
import EntryList from "./entryList";
import Nav from "./Nav";

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

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav />

        <div className="right-side">
          {/* <EntryList /> */}
          {/* <button color="blue" shadowSize={2}>
            Click Me
          </button> */}
          {/* <Entry display="full" entry={entryData} />
        <Entry display="cover" entry={entryData}/> */}
        <Entry display="full" entry={entryData}/>
        </div>
      </div>
    );
  }
}
