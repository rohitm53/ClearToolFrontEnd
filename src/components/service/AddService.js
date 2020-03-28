import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllServices } from '../../actions/serviceActions';
import { addCompanyService, getServiceByCompanyCode } from '../../actions/companyServiceActions';


class AddService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companyService: []
        }
    }

    componentDidMount() {
        this.props.getAllServices();
        this.props.getServiceByCompanyCode("WINIT");
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.companyService) {
            this.setState({ companyService: nextProps.companyService });
        }
    }

    onhandleChange = (e) => {
        console.log("Selected checked : ", e.target.checked);
        console.log("Selected Value : ", e.target.value);

        const services = this.props.service.services;

        const serviceCode = e.target.value;
        const checkedStatus = e.target.checked;

        if (checkedStatus) {
            const checked_service = services.filter(service_item => service_item.serviceCode === serviceCode);
            this.setState({ companyService: this.state.companyService.concat(checked_service) });
        } else {
            const checked_service = this.state.companyService.filter(
                service_item => service_item.serviceCode !== serviceCode);
            this.setState({ companyService: checked_service });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { companyService } = this.state;
        let serviceCode = [];
        let companyServiceReq
        for (let i = 0; i < companyService.length; i++) {
            serviceCode.push(companyService[i].serviceCode);
        }
        companyServiceReq = {
            companyCode: "WINIT",
            serviceCodes: serviceCode
        }

        this.props.addCompanyService(companyServiceReq, this.props.history);

    }

    isServiceChecked = (serviceCode) => {
        return this.state.companyService.some(service => service.serviceCode === serviceCode);
    }

    render() {

        const { services } = this.props.service;

        const { companyService } = this.state;

        const selected_service_section_Algorithm = (companyService) => {
            if (companyService.length === 0) {
                return (
                    <div className="alert alert-info text-center mt-5" role="alert">
                        Check services to add on board
                    </div>
                );
            } else {
                return (
                    <div className="mx-5 my-3">
                        {
                            companyService.map(service => {
                                return (
                                    <div className="input-group mb-1" key={service.serviceCode}>
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <input type="checkbox" checked={true} readOnly />
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" value={service.serviceName} disabled />
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            }
        }

        let selected_service_section = selected_service_section_Algorithm(companyService);


        return (
            <div className="container smooth-scroll list-unstyled">
                <div className="row">
                    <div className="col">
                        <h4 className="display-5 text-primary text-center"><b>Add Service</b></h4>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm border border-dark mr-2">
                        <div className="mx-5 my-3">
                            {
                                services.map(service => {
                                    return (
                                        <div className="form-check mb-1" key={service.serviceCode}>
                                            <label className="form-check-lable">
                                                <input type="checkbox" className="form-check-input"
                                                    value={service.serviceCode}
                                                    checked={this.isServiceChecked(service.serviceCode)}
                                                    onChange={this.onhandleChange} />
                                                {service.serviceName}
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className="col-sm border border-dark">
                        {selected_service_section}
                    </div>
                </div>
                <div className="text-center my-3">
                    <button className="btn btn-success" onClick={this.onSubmit.bind(this)} >Submit</button>
                </div>
            </div>
        )
    }
}

AddService.propTypes = {
    service: PropTypes.object.isRequired,
    companyService: PropTypes.object.isRequired,
    getAllServices: PropTypes.func.isRequired,
    getServiceByCompanyCode: PropTypes.func.isRequired
}

const mapStateToProp = state => ({
    service: state.service,
    companyService: state.companyService.companyService
})

export default connect(mapStateToProp, {
    getAllServices, addCompanyService
    , getServiceByCompanyCode
})(AddService);
