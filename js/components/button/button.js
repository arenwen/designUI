import React,{ Component, PropTypes } from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";

class Button extends Component {
    constructor(args) {
        super(args);
        this.state = {
        };
    }
    render(){
        return (
            <button className="ui-button">primary</button>
        );
    }
}
module.exports = Button;