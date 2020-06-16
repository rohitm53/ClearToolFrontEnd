import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="container">

                <h3>Landing Page</h3>
                <Link className="btn btn-lg btn-primary mr-2" to="/registercompany">Sign Up</Link>
                <Link className="btn btn-lg btn-secondary mr-2" to="/login">Login</Link>

            </div>
        );
    }
}

export default Landing;
