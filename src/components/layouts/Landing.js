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
            <div className="login-bg">
                <div className="container text-center pt-5">
                    <div className="border rounded-lg border-warning p-5">
                        <Link className="btn btn-lg btn-danger mr-2" to="/registercompany">Sign Up</Link>
                        <Link className="btn btn-lg btn-danger mr-2" to="/login">Login</Link><br />
                        <i className="justify-content font-weight-bold">
                            Register your company & gets our service
                        </i>
                    </div>
                </div>
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
