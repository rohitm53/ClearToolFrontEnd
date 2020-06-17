import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Landing extends Component {

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }

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

Landing.propTypes = {
    security: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    security: state.security
})


export default connect(mapStateToProp)(Landing);
