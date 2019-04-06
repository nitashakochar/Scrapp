import React from "react";
import Entry from "./entry";

const entryData = { people: ["Anna", "Shep"],
                    places: ["Dartmouth", "Thayer"], 
                    journals: ["happy", "major"],
                    tags: ["stress", "fun"],
                    content: "Today is a great day. I sat in Thayer all day and had a blast.",
                    title: "Hackathon",
                    };

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to React!</h2>
        <button color="blue" shadowSize={2}>
          Click Me
        </button>
        <Entry display="full" entry={entryData} />
        <Entry display="cover" />
      </div>
    );
  }
}
