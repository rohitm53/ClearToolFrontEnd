import React, { Component } from 'react';
import CreatServiceButton from './custombuttons/CreatServiceButton';
import ServiceItem from './service/ServiceItem';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getServices} from '../actions/serviceActions';
import EmployeeListButton from './custombuttons/EmployeeListButton';

class Dashboard extends Component {

    componentDidMount(){
        this.props.getServices();
    }

    render() {
        const services = this.props.service.services;
        return (
           <div className="container">
                <div className="d-inline">
                     <CreatServiceButton/>     
                </div>
                <div className="d-inline ml-4">
                    <EmployeeListButton/>
                </div>
               
               <div className="wrapper my-4">
                    {
                        services.map(service=> {
                            return(
                                <ServiceItem key={service.serviceCode} service = {service}/>
                            )
                        })
                    }
               </div>
           </div>
        )
    }
}

Dashboard.propTypes = {
    getServices:PropTypes.func.isRequired,
    service:PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    service:state.service
})


export default connect(mapStateToProp,{getServices})(Dashboard);
