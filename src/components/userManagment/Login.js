import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticateCompany } from '../../actions/companyLoginAction';
import classnames from 'classnames';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companyCode: '',
            password: '',
            errorMessage: '',
            errors: {}
        }
    }

    componentDidMount() {
        if (this.props.loggedInCompanyCode.length > 0) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
        if (nextProps.errorMessage) {
            this.setState({ errorMessage: nextProps.errorMessage });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const companyLoginRequest = {
            companyCode: this.state.companyCode,
            password: this.state.password
        }
        console.log(companyLoginRequest);
        this.props.authenticateCompany(companyLoginRequest, this.props.history);
    }

    render() {

        const { errors, errorMessage } = this.state;

        let loginErrorContent;
        if (errorMessage != null && errorMessage.length > 0) {
            loginErrorContent = (
                <div className="alert alert-danger text-center" role="alert">{errorMessage}</div>
            );
        } else {
            loginErrorContent = null;
        }

        return (
            <div className="login-bg">
                <div className="container login-card">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this)} >
                                <div className="form-group">
                                    <div className="form-group">
                                        <label htmlFor="">Company Code</label>
                                        <input type="text"
                                            className={classnames("form-control", { "is-invalid": errors.companyCode })}
                                            name="companyCode"
                                            value={this.state.companyCode}
                                            onChange={this.onChange}
                                        />
                                        {
                                            errors.companyCode && (
                                                <div className="invalid-feedback">{errors.companyCode}</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <input type="password" className={classnames("form-control", { "is-invalid": errors.password })}
                                            name="password"
                                            value={this.state.password}
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
                                </div>
                            </form>
                            {
                                loginErrorContent
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

Login.propType = {
    errorMessage: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    authenticateCompany: PropTypes.func.isRequired,
    loggedInCompanyCode: PropTypes.string.isRequired
}

const mapStateToProp = state => ({
    errorMessage: state.loginState.errorMessage,
    loggedInCompanyCode: state.loginState.companyCode,
    errors: state.errors
})

export default connect(mapStateToProp, { authenticateCompany })(Login);
