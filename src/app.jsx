import React from "react";
import Entry from "./entry";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to React!</h2>
        <button color="blue" shadowSize={2}>
          Click Me
        </button>
        <Entry display="full"/>
        <Entry display="cover"/>
      </div>
    );
  }
}
