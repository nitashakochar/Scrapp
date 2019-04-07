import React from "react";
import { Component } from "react";
import Tag from "./tag";

const styles = {
  margin: "20px",
  width: "250px",
  height: "250px",
  backgroundColor: "#ddd"
};


class Entry extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: true
    };
  }
  render() {
    let currDate = new Date(this.props.entry.date); 
    currDate = (currDate.getMonth()+1) + "/" + currDate.getDate();
    let disp, tags;
    let dispTags = true;
    if (this.props.display == "full") {
      this.state.showDetails
        ? (tags = (
            <div className="tags">
              <div className="tagsRow">
                <p>People:</p>{" "}
                {this.props.entry.people.map(element => {
                  return <Tag>{element}</Tag>;
                })}
              </div>
              <div className="tagsRow">
                <p>Places:</p>{" "}
                {this.props.entry.places.map(ele => {
                  return <Tag>{ele}</Tag>;
                })}
              </div>
              <div className="tagsRow">
                <p>Tags:</p>
                {this.props.entry.tags.map(ele => {
                  return (
                    <Tag delete={() => console.log("delete tag")}>{ele}</Tag>
                  );
                })}
                <button>
                  <i className="fas fa-plus" />
                </button>
              </div>
              <div className="tagsRow">
                <p>Journals:</p>
                {this.props.entry.journals.map(ele => {
                  return <Tag>{ele}</Tag>;
                })}
              </div>
            </div>
          ))
        : (tags = <div className="tagsRow" />);
      disp = (
        <div className="entryFull">
          <div className="titleRow">
            <h1>{currDate}</h1>
            <div className="entry-buttons">
              <button id="download-button">Download</button>
              <button
                onClick={() => {
                  console.log("hiding details...");
                  this.setState(prevState => {
                    return { showDetails: !prevState.showDetails };
                  });
                }}
              >
                Details
              </button>
            </div>
          </div>
          {tags}

          <div className="entryContent">
            <h1>{this.props.entry.title}</h1>
            <p>{this.props.entry.content}</p>

            <div className="entryImages">
              <img src={this.props.entry.image} />
            </div>
          </div>
        </div>
      );
    } else {
      disp = (
        <div className="entryCover">
          <h1>{currDate}</h1>
          <h2>{this.props.entry.title}</h2>
          <p>{this.props.entry.content.substring(0,100)}...</p>
        </div>
      );
    }
    return disp;
  }
}

export default Entry;
