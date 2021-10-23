import React, { Component } from "react";

export class Loading extends Component {
    render() {
        return (
            <div
                className="container d-flex justify-content-center align-items-center"
                style={{ height: "350px" }}
            >
                <div
                    className="spinner-grow text-primary"
                    role="status"
                    style={{ height: "60px", width: "60px" }}
                >
                </div>
            </div>
        );
    }
}

export default Loading;
