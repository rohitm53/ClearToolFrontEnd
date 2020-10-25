import React, { Component } from 'react'


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

        return (
           <div className="card my-2" onClick={this.onItemClick.bind(this,serviceRequest.id)}>
                <div className="card-header bg-info text-white">
                    {serviceRequest.serviceReqCode}
                </div>
                <div className="card-body service-req-item-body py-2 ">
                    <div className="card-title">
                        <h5>{serviceRequest.serviceName} ({serviceRequest.serviceCode}) </h5>
                    </div>
                    <p style={p1Margin} className="d-inline"> At : {serviceRequest.time}</p>
                    <p style={p1Margin}>By user: Rohit Manohar</p>
                 
                </div>
                {
                    serviceRequest.assignedEmployeeCode && (
                        <div className="card-footer py-2">
                            <p style={p0Margin} className="font-weight-bold">Assigned Employee Details</p>
                            <p style={p1Margin}>Name : Rohit Manohar</p>
                            <p style={p1Margin}>Mobile : 8790061749</p>
                        </div>
                    )
                }
               
           </div>
        )
    }
}

export default ServiceReqestItem;
