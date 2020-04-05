import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            Clean Master
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#mobile-nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="mobile-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/registercompany" className="nav-link">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
