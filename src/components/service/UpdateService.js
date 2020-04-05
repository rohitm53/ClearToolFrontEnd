import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getServiceByid, createService } from '../../actions/serviceActions';

class UpdateService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            serviceCode: '',
            serviceName: '',
            noOfEmpReq: '',
            create_at: '',
            errors: {}
        }
    }

    componentDidMount() {
        const { serviceCode } = this.props.match.params;
        this.props.getServiceByid(serviceCode, this.props.history);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        const {
            id,
            serviceCode,
            serviceName,
            noOfEmpReq,
            create_at,
        } = nextProps.service;

        this.setState({
            id,
            serviceCode,
            serviceName,
            noOfEmpReq,
            create_at
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onUpdate = (e) => {
        e.preventDefault();

        const updatedService = {
            id: this.state.id,
            serviceCode: this.state.serviceCode,
            serviceName: this.state.serviceName,
            noOfEmpReq: this.state.noOfEmpReq,
            create_at: this.state.create_at
        }

        this.props.createService(updatedService, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container mt-3">
                <h4 className="display-4 text-primary text-center">Update Service</h4>
                <hr />
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <form onSubmit={this.onUpdate.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="servicecode">Service Code</label>
                                <input type="text" className="form-control form-control-lg"
                                    name="serviceCode"
                                    value={this.state.serviceCode}
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="servicename">Service Name</label>
                                <input type="text" className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.serviceName
                                })}
                                    placeholder="Service Name"
                                    name="serviceName"
                                    value={this.state.serviceName}
                                    onChange={this.onChange}
                                />
                                {
                                    errors.serviceName && (
                                        <div className="invalid-feedback">{errors.serviceName}</div>
                                    )
                                }
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="employeenumber">No. of Employee</label>
                                        <input type="number" className="form-control form-control-lg"
                                            name="noOfEmpReq"
                                            value={this.state.noOfEmpReq}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                            <input type="submit" value="Update" className="btn btn-primary btn-block" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

UpdateService.propTypes = {
    service: PropTypes.object.isRequired,
    getServiceByid: PropTypes.func.isRequired,
    createService: PropTypes.func.isRequired
}

const mapStateToProp = state => ({
    service: state.service.service,
    errors: state.errors
});


export default connect(mapStateToProp, { getServiceByid, createService })(UpdateService);
