import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <div className="container-fluid">
                    <Link onClick={this.props.title} to="/" style={{textDecoration:'none'}} className='logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-yin-yang mx-2" viewBox="0 0 16 16">
                            <path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z" />
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7Zm7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334Z" />
                        </svg>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* <li className="nav-item">
                                <Link onClick={this.props.title} className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li> */}

                            <li className="nav-item">
                                <Link onClick={this.props.title}  className="nav-link active" aria-current="page" to="/technology">TECHNOLOGY</Link>
                            </li>

                            <li className="nav-item">
                                <Link onClick={this.props.title}  className="nav-link active" aria-current="page" to="/business">BUSINESS</Link>
                            </li>

                            <li className="nav-item">
                                <Link onClick={this.props.title}  className="nav-link active" aria-current="page" to="/sports">SPORTS</Link>
                            </li>

                            <li className="nav-item">
                                <Link onClick={this.props.title}  className="nav-link active" aria-current="page" to="/entertainment">ENTERTAINMENT</Link>
                            </li>

                            <li className="nav-item">
                                <Link onClick={this.props.title}  className="nav-link active" aria-current="page" to="/science">SCIENCE</Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
