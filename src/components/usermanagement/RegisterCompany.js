import React, { Component } from 'react';
import { createNewCompany } from '../../actions/securityActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

class RegisterCompany extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            companyCode: '',
            address: '',
            email: '',
            errors: ''
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

    onSubmite = (e) => {
        e.preventDefault();
        const newCompany = {
            companyName: this.state.companyName,
            companyCode: this.state.companyCode,
            address: this.state.address,
            email: this.state.email
        }
        this.props.createNewCompany(newCompany, this.props.history);
    }

    render() {

        const { errors } = this.state;

        return (
            <div className="container mt-3">
                <h4 className="display-4 text-primary text-center">Register Company</h4>
                <hr />
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.onSubmite.bind(this)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="companyName">Company Name</label>
                                    <input type="text" className={classnames("form-control form-control-lg",
                                        { "is-invalid": errors.companyName }
                                    )}
                                        placeholder="Company Name"
                                        name="companyName"
                                        value={this.state.companyName}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.companyName && (
                                            <div className="invalid-feedback">{errors.companyName}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className={classnames("form-control form-control-lg",
                                        { "is-invalid": errors.email }
                                    )}
                                        placeholder="Company Contact Email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.email && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="companyCode">Company Code</label>
                                <input type="text" className={classnames("form-control form-control-lg",
                                    { "is-invalid": errors.companyCode }
                                )}
                                    placeholder="Company Code"
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
                                <label htmlFor="address">Address</label>
                                <textarea type="text" className={classnames("form-control form-control-lg",
                                    { "is-invalid": errors.address }
                                )}
                                    placeholder="Address"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.onChange}
                                ></textarea>
                                {
                                    errors.address && (
                                        <div className="invalid-feedback">{errors.address}</div>
                                    )
                                }
                            </div>
                            <div className="text-center">
                                <input type="submit" value="Register" className="btn btn-primary" />
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

RegisterCompany.propTypes = {
    createNewCompany: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    errors: state.errors
})

export default connect(mapStateToProp, { createNewCompany })(RegisterCompany);
