import React, { Component } from 'react';
import "./ServiceRequestItem.css";

class ServiceReqestItem extends Component {


    onItemClick= (id) => {
        this.props.openServiceReqDetailModal(id)
    }

    render() {

        const {serviceRequest} = this.props;

        return (
           <div className="border border-primary rounded my-1 p-.5 " onClick={this.onItemClick.bind(this,serviceRequest.id)}>
                <p class="font-weight-bold ">{serviceRequest.serviceName} ({serviceRequest.serviceCode})</p>
                <p class="font-weight-bold "> at {serviceRequest.scheduleTime} </p> <hr className="divider"/>
                <p class="font-weight-bold "> {serviceRequest.serviceReqCode} </p>
           </div>
        )
    }
}

export default ServiceReqestItem;
