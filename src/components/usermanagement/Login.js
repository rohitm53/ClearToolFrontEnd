import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginCompany } from '../../actions/securityActions';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '', //company code is user name
            password: '',
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const loginRequest = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginCompany(loginRequest);
    }

    render() {

        const { errors } = this.state;

        return (
            <div className="login-bg">
                <div className="container login-card">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                    <label htmlFor="companycode">Company Code</label>
                                    <input type="text" className={classnames("form-control form-control-lg",
                                        { "is-invalid": errors.username }
                                    )}
                                        placeholder="Company Code"
                                        name="username"
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.username && (
                                            <div className="invalid-feedback">{errors.username}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companycode">Password</label>
                                    <input type="text" className={classnames("form-control form-control-lg",
                                        { "is-invalid": errors.password }
                                    )}
                                        placeholder="Password"
                                        name="password"
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )
                                    }
                                </div>

                                <div className="text-center">
                                    <input type="submit" value="Login" className="btn btn-outline-light btn-block" />
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

Login.propTypes = {
    loginCompany: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    security: state.security
})

export default connect(mapStateToProps, { loginCompany })(Login);
