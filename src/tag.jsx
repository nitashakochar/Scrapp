import React from "react";
import { Component } from "react";

class Tag extends Component {
    render() {

        return(
            <div className="tag">
                {this.props.children}
                <button onClick={this.props.delete}><i className="fas fa-times"></i></button>
            </div>)
    }
}

export default Tag;