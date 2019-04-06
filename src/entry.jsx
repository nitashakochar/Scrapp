import React from "react";
import { Component } from "react";
import Tag from './tag';

const styles = {
    margin: '20px',
    width: '250px',
    height: '250px',
    backgroundColor: '#ddd',
  };

class Entry extends Component { 
    constructor () {
        super();
        this.state = {
            showDetails: true,
        };
    }
    render() {
        let disp, tags;
        let dispTags = true;
        if (this.props.display == "full"){
            this.state.showDetails ? (tags = <div className="tags">
                            <div className="tagsRow" > 
                                People: {this.props.entry.people.map(element => {
                                    return(<Tag>{element}</Tag>);
                                })}
                            </div>
                            <div className="tagsRow" > 
                                Places: {this.props.entry.places.map(ele => {
                                    return(<Tag>{ele}</Tag>);
                                } )}
                            </div>
                            <div className="tagsRow" > 
                                Tags: {this.props.entry.tags.map(ele => {
                                    return(<Tag delete={()=> console.log("delete tag")}>{ele}</Tag>);
                                } )}
                                <button><i className="fas fa-plus"></i></button>
                            </div>
                            <div className="tagsRow" > 
                                Journals: {this.props.entry.journals.map(ele => {
                                    return(<Tag>{ele}</Tag>);
                                } )}
                            </div>
                        </div>) 
                : tags = <div className="tagsRow"></div>;
            disp = (
                <div className="entryFull" >
                    <div className="titleRow">
                        <h1>{this.props.entry.title}</h1>
                        <button onClick={() => {console.log('hiding details...'); this.setState((prevState) => {return({showDetails: !prevState.showDetails})})}}>Details</button>
                    </div>
                    {tags}
                    <div className="entryContent">
                        <p>
                            {this.props.entry.content}
                        </p>
                    </div>
                    <div className="entryImages">
                        <img src={this.props.entry.image} />
                    </div>
                </div>
            )
        }
        else {
            disp = <div>Entry Cover</div>;
        }
        return (disp)
    }
}

export default Entry;
