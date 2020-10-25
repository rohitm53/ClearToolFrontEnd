import React, { Component } from 'react'
import ServiceReqestItem from './ServiceReqestItem';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAllServiceRequest} from '../../actions/serviceRequestActions'
import { ASSIGNED_SERVICE_REQ, CANCELED_SERVICE_REQ, COMPLETED_SERVICE_REQ, INPROGRESS_SERVICE_REQ, PENDING_SERVICE_REQ } from '../../constants/Constants';
import { Modal } from 'react-bootstrap';
import ServiceRequestDetailsModal from './ServiceRequestDetailsModal';

class ServiceRequestDashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            showServiceReqDetailModal:false,
            selectedServiceReq:{}
        }
    }

    openServiceReqDetailModal = (id) => {

        const serviceReq = this.props.serviceRequests.filter(request => request.id===id)[0];

        this.setState({
            showServiceReqDetailModal:true,
            selectedServiceReq:serviceReq
        });
    }

    closServiceReqDetailModal =() => {
        this.setState({
            showServiceReqDetailModal:false,
            selectedServiceReq:{}
        });
    }

    componentDidMount(){
        this.props.getAllServiceRequest()
    }

    render() {

        const {serviceRequests} = this.props;

        let pendingReq=[];
        let inProgressReq=[];
        let completedReq=[];
        let cancelledReq=[];

        for(let i=0;i<serviceRequests.length;i++){
            
            let item = serviceRequests[i];
            let statusCode=item.statusCode;

            if(statusCode===PENDING_SERVICE_REQ){
                pendingReq.push(
                    <ServiceReqestItem 
                            key={item.id}  
                            serviceRequest = {item}    
                            openServiceReqDetailModal={this.openServiceReqDetailModal}
                            />
                );
            }else if(statusCode===ASSIGNED_SERVICE_REQ || statusCode==INPROGRESS_SERVICE_REQ){
                inProgressReq.push(
                    <ServiceReqestItem 
                            key={item.id}  
                            serviceRequest = {item}  
                            openServiceReqDetailModal={this.openServiceReqDetailModal}
                            />
                );
            }else if(statusCode===COMPLETED_SERVICE_REQ){
                completedReq.push(
                    <ServiceReqestItem 
                            key={item.id}  
                            serviceRequest = {item}    
                            openServiceReqDetailModal={this.openServiceReqDetailModal}
                            />
                );
            }else  if(statusCode===CANCELED_SERVICE_REQ){
                cancelledReq.push(
                    <ServiceReqestItem 
                            key={item.id}  
                            serviceRequest = {item}  
                            openServiceReqDetailModal={this.openServiceReqDetailModal}  
                            />
                );
            }else{
                cancelledReq.push(
                    <ServiceReqestItem 
                            key={item.id}  
                            serviceRequest = {item}    
                            openEmployeeAssignModal={this.openEmployeeAssignModal}
                            />
                );
            }

        }


        return (
           <div className="container">

            <div className="row">
                <div className="col-md-3">

                    <div className="card text-center my-2">
                        <div className="card-header bg-info text-white">
                            <h6>Pending</h6>
                        </div>
                    </div>
                    {
                        pendingReq
                    }

                </div>

                <div className="col-md-3">
                    <div className="card text-center my-2">
                        <div className="card-header bg-warning text-white">
                            <h6>In-Progress</h6>
                        </div>
                    </div>
                    {
                        inProgressReq
                    }
                </div>

                <div className="col-md-3">
                    <div className="card text-center my-2">
                        <div className="card-header bg-success text-white">
                            <h6>Completed</h6>
                        </div>
                    </div>

                    {
                        completedReq
                    }
                </div>

                <div className="col-md-3">
                    <div className="card text-center my-2">
                        <div className="card-header bg-danger text-white">
                            <h6>Cancelled</h6>
                        </div>
                    </div>
                    {
                        cancelledReq
                    }
                </div>

            </div>

            <Modal
                show={this.state.showServiceReqDetailModal}
                onHide={this.closServiceReqDetailModal}
                size="lg"
                       backdrop="static"
                       centered>

                <Modal.Header closeButton>
                    <Modal.Title className="text-secondary" >{this.state.selectedServiceReq.serviceReqCode}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ServiceRequestDetailsModal 
                        serviceRequest = {this.state.selectedServiceReq.serviceReqCode}
                    />
                </Modal.Body>

            </Modal>

           </div>
        )
    }
}

ServiceRequestDashboard.propTypes = {
    getAllServiceRequest : PropTypes.func.isRequired,
    serviceRequests : PropTypes.array.isRequired
}

const mapStateToProp = (state)=>({
    serviceRequests:state.serviceRequest.serviceRequests
})

export default connect(mapStateToProp,{getAllServiceRequest})(ServiceRequestDashboard);
