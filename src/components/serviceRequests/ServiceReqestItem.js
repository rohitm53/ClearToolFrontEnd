import React, { Component } from 'react';
import "./ServiceRequestItem.css";
import { PENDING_SERVICE_REQ,ASSIGNED_SERVICE_REQ ,INPROGRESS_SERVICE_REQ,
    COMPLETED_SERVICE_REQ , CANCELED_SERVICE_REQ } from '../../constants/Constants';


var p0Margin = {
    margin:0
}
var p1Margin = {
    margin:1
}
var p1_5Margin = {
    margin:2
}
var p2Margin = {
    margin:2
}

class ServiceReqestItem extends Component {


    onItemClick= (id) => {
        this.props.openServiceReqDetailModal(id)
    }

    render() {

        const {serviceRequest} = this.props;
        let cardHeaderBg="card-header bg-info text-white";
        if(serviceRequest.statusCode===PENDING_SERVICE_REQ){
            cardHeaderBg="card-header pending-service-item text-dark" ;
        }else if(serviceRequest.statusCode===ASSIGNED_SERVICE_REQ){
            cardHeaderBg="card-header assigned-service-item text-white" ;
        }else if(serviceRequest.statusCode===INPROGRESS_SERVICE_REQ){
            cardHeaderBg="card-header in-progress-service-item text-white" ;
        }else if(serviceRequest.statusCode===COMPLETED_SERVICE_REQ){
            cardHeaderBg="card-header completed-service-item text-dark" ;
        }else if(serviceRequest.statusCode===CANCELED_SERVICE_REQ){
            cardHeaderBg="card-header cancelled-service-item text-white" ;
        }

        return (
           <div className="card my-2" onClick={this.onItemClick.bind(this,serviceRequest.id)}>
                <div className={cardHeaderBg}>
                    {serviceRequest.serviceReqCode}
                </div>
                <div className="card-body service-req-item-body py-2 ">
                    <div className="card-title">
                        <h5>{serviceRequest.serviceName} ({serviceRequest.serviceCode}) </h5>
                    </div>
                    <p style={p1Margin}>Date : {serviceRequest.scheduleDate}</p>
                    <p style={p1Margin}>Time : {serviceRequest.scheduleTime} hrs</p>
                    <p style={p1Margin}>By user: ({serviceRequest.mobileUserCode}){serviceRequest.mobileUserName}</p>
                 
                </div>
                {
                    serviceRequest.assignedEmployeeCode && (
                        <div className="card-footer py-2">
                            <p style={p0Margin} className="font-weight-bold">Assigned Employee Details</p>
                            <p style={p1Margin}>Name : {serviceRequest.assignedEmployeeName}</p>
                            <p style={p1Margin}>Mobile : {serviceRequest.assignedEmployeeMobile}</p>
                        </div>
                    )
                }
               
           </div>
        )
    }
}

export default ServiceReqestItem;
