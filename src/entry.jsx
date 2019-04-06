import React from "react";
import { Component } from "react";



class Entry extends Component { 
    render() {
        let disp;
        if (this.props.display == "full"){
            disp = (
                <div className="entryFull">
                    <h1>{this.props.entry.title}</h1>
                    <div className="tags">
                        <ul className="tagsRow" > 
                            People: {this.props.entry.people.map(element => {
                                return(<li>{element}</li>);
                            })}
                        </ul>
                        <ul className="tagsRow" > 
                            Places: {this.props.entry.places.map(ele => {
                                return(<li>{ele}</li>);
                            } )}
                        </ul>
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
