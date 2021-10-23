import React, { Component } from "react";

export class Darkmode extends Component {
    render() {
        return (
            <div className="form-check form-switch ">
                <input
                    onClick={this.props.darkmode}
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                />
                <label
                    className={`form-check-label text-${this.props.mode === "light" ? "dark" : "light"
                        }`}
                    htmlFor="flexSwitchCheckChecked"
                >
                    {this.props.mode === "light"
                        ? "Enable Dark Mode"
                        : "Disable Dark Mode"}
                </label>
            </div>
        );
    }
}

export default Darkmode;
