import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {createService} from "../../actions/serviceActions";

class CreateService extends Component {

    constructor(props) {
        super(props);
        this.state={
            serviceCode:'',
            serviceName:'',
            noOfEmpReq:'',
            errors:{}
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }

    onChange=(e)=> {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit=(e)=> {
        e.preventDefault();
        const service = {
            serviceCode:this.state.serviceCode,
            serviceName:this.state.serviceName,
            noOfEmpReq:this.state.noOfEmpReq
        }
        this.props.createService(service,this.props.history);
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="container">
                <h4 className="display-4 text-primary text-center">Create Service</h4>
                <hr/>
                <div className="row ">
                    <div className="col-md-8 m-auto">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="servicecode">Service Code</label>
                                <input type="text" className={classnames("form-control form-control-lg",{
                                         "is-invalid":errors.serviceCode
                                     })} 
                                    placeholder="service code"
                                    name="serviceCode"
                                    value={this.state.serviceCode}
                                    onChange={this.onChange}
                                />
                                {
                                    errors.serviceCode && (
                                        <div className="invalid-feedback">{errors.serviceCode}</div>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="servicename">Service Name</label>
                                <input type="text" className={classnames("form-control form-control-lg",{
                                         "is-invalid":errors.serviceName
                                    })} 
                                    placeholder="service name"
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
                                        <label htmlFor="employeenumber">No. of Employee </label>
                                        <input type="number" className="form-control form-control-lg" placeholder="no. of emp"
                                            name="noOfEmpReq"
                                            value={this.state.noOfEmpReq}
                                            onChange={this.onChange}
                                        />
                                     </div>
                                </div>
                                <div className="col">

                                </div>
                            </div>
                            <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                        </form>
                   </div>
                </div>
            </div>
        )
    }
}

CreateService.propTypes = {
    createService:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors:state.errors
});

export default connect(mapStateToProps,{createService})(CreateService);
