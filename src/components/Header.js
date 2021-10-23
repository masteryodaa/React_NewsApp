import React, { Component } from "react";
import Darkmode from "./Darkmode";

export class Header extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-between mt-5">
                <h3 className={`header text-${this.props.mode === "light" ? "dark" : "light"}`}>TOP {this.props.headline} HEADLINES
                </h3>

                <Darkmode mode={this.props.mode} darkmode={this.props.darkmode} />
            </div>
        );
    }
}

export default Header;
