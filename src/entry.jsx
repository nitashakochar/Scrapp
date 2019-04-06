import React from "react";
import { Component } from "react";

class Entry extends Component { 
    render() {
        let disp;
        if (this.props.display == "full"){
            disp = <div>I'm an Entry!!!</div>;
        }
        else {
            disp = <div>Entry Cover</div>;
        }
        return (disp)
    }
}

export default Entry;
