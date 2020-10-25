import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../../actions/securityActions';

class NavBar extends Component {

    logOut = (e) => {
        this.props.logOut();
        window.location.href = "/";
    }

    render() {

        const { validToken, companySecurityInfo } = this.props.security;

        const userIsAuthenticated = (
            <div className="container">
                <Link to="/dashboard" className="navbar-brand">
                    Clean Master
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#mobile-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="service" 
                                  role="button" 
                                  data-toggle="dropdown" 
                                  aria-haspopup="true" 
                                  aria-expanded="false"> 
                                Services    
                                </Link>

                            <div className="dropdown-menu" aria-labelledby="service">
                                <Link className="dropdown-item" 
                                    to="/addservice">Available Services</Link>
                               
                                <Link className="dropdown-item">Manage Services</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="resources" 
                                            role="button" 
                                            data-toggle="dropdown" 
                                            aria-haspopup="true" 
                                            aria-expanded="false"> 
                                Resources    
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="resources">
                                <Link className="dropdown-item" 
                                     to="/employeelist">Employee Management</Link>
                                     
                                <Link className="dropdown-item" to="/assetlist">Assets</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="transactions" 
                                                role="button" 
                                                data-toggle="dropdown" 
                                                aria-haspopup="true" 
                                                aria-expanded="false"> 
                                Transactions    
                                </Link>

                            <div className="dropdown-menu" aria-labelledby="transactions">
                                <Link className="dropdown-item" to="/servicerequests" 
                                        >Service Request</Link>
                                <Link className="dropdown-item">Assigned Employee</Link>
                            </div>
                        </li>

                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/updatecontacts">
                                <i className="fas fa-user-circle mr-1"></i> {companySecurityInfo.companyCode}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link"
                                onClick={this.logOut}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

        );

        const userIsNotAuthenticated = (
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
                            <Link className="nav-link" to="/registercompany">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>

            </div>

        );

        let headerLinks;

        if (validToken && companySecurityInfo.companyCode != null) {
            headerLinks = userIsAuthenticated;
        } else {
            headerLinks = userIsNotAuthenticated;
        }



        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark">
                    {headerLinks}
                </nav>
            </div>
        )
    }
}

NavBar.propTypes = {
    logOut: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
}

const mapStateToProp = (state) => ({
    security: state.security
})

export default connect(mapStateToProp, { logOut })(NavBar);
