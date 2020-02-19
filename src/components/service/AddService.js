import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAllServices} from '../../actions/serviceActions';


class AddService extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected_Services:[]
        }
    }

    componentDidMount(){
        this.props.getAllServices();
    }

    onhandleChange = (e) => {
        console.log("Selected checked : ",e.target.checked);
        console.log("Selected Value : ",e.target.value);

        const services = this.props.service.services;

        const serviceCode = e.target.value;
        const checkedStatus = e.target.checked;

        if(checkedStatus){
            const checked_service=services.filter(service_item => service_item.serviceCode===serviceCode);
            this.setState({selected_Services:this.state.selected_Services.concat(checked_service)});
        }else{
            const checked_service = this.state.selected_Services.filter(
                                        service_item => service_item.serviceCode!==serviceCode);
            this.setState({selected_Services:checked_service});
        }
    }
    render() {

        const {services} = this.props.service;

        const {selected_Services} = this.state;

        const selected_service_section_Algorithm = (selected_Services) => {
            if(selected_Services.length===0){
                return(
                    <div className="alert alert-info text-center mt-5" role="alert">
                        Check services to add on board
                    </div>
                );
            }else{
                return(
                    <div className="mx-5 my-3">
                            {
                                selected_Services.map(service => {
                                    return(
                                        <div className="input-group mb-1" key={service.serviceCode}>
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <input type="checkbox" checked={true}/>
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

        let selected_service_section = selected_service_section_Algorithm(selected_Services);
        

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className="display-5 text-primary text-center"><b>Add Service</b></h4>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm border border-dark mr-2">
                        <div className="mx-5 my-3">
                            {
                                services.map(service => {
                                    return(
                                        <div className="form-check mb-1" key={service.serviceCode}>
                                             <label className="form-check-lable">
                                                 <input type="checkbox" className="form-check-input" 
                                                    value={service.serviceCode}
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
                <div className="text-center mt-3">
                     <button className="btn btn-success">Submit</button>
                </div>
            </div>
        )
    }
}

AddService.propTypes= {
    service:PropTypes.object.isRequired,
    selected_Services:PropTypes.object.isRequired,
    getAllServices:PropTypes.func.isRequired
}

const mapStateToProp = state => ({
    service:state.service
})

export default connect(mapStateToProp,{getAllServices})(AddService);
