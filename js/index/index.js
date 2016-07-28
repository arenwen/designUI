import React,{ Component, PropTypes } from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";
import "../../less/index";

class Test extends Component {
    constructor(args) {
        super(args);
        this.state = {};
    }
    render(){
        console.log(this.props.children);
        return (
            <div>
                d
            </div>
        );
    }
}
module.exports = Test;