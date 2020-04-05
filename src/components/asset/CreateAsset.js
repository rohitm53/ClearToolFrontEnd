import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postAsset } from "../../actions/assetActions";
import classnames from 'classnames';

class CreateAsset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            name: '',
            quantity: '',
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const asset = {
            code: this.state.code,
            name: this.state.name,
            quantity: this.state.quantity,
            companyCode: "WINIT"
        };
        this.props.postAsset(asset, this.props.history);
    }

    render() {

        const { errors } = this.state;

        return (
            <div className="container mt-3">
                <h4 className="display-4 text-center text-primary">Create Asset</h4>
                <hr />
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="code">Asset Code</label>
                                <input type="text" className={classnames("form-control form-control-lg",
                                    { "is-invalid": errors.code }
                                )}
                                    placeholder="Asset Code"
                                    value={this.state.code}
                                    name="code"
                                    onChange={this.onChange}
                                />
                                {
                                    errors.code && (
                                        <div className="invalid-feedback">{errors.code}</div>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Asset Name</label>
                                <input type="text" className={classnames("form-control form-control-lg",
                                    { "is-invalid": errors.name })}
                                    placeholder="Asset Name"
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.onChange}
                                />
                                {
                                    errors.name && (
                                        <div className="invalid-feedback">{errors.name}</div>
                                    )
                                }
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="quantity">Quantity</label>
                                        <input type="number" className="form-control form-control-lg"
                                            placeholder="Quantity"
                                            value={this.state.quantity}
                                            name="quantity"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">

                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block" value="Submit" />
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

CreateAsset.propType = {
    postAsset: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
    errors: state.errors
});


export default connect(mapStateToProp, { postAsset })(CreateAsset);
