import React, { Component } from 'react'
import ServiceReqestItem from './ServiceReqestItem';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAllServiceRequest} from '../../actions/serviceRequestActions';
import { getAllCompanyEmployees } from '../../actions/employeeActions';
import { ASSIGNED_SERVICE_REQ, CANCELED_SERVICE_REQ, COMPLETED_SERVICE_REQ, 
    INPROGRESS_SERVICE_REQ, PENDING_SERVICE_REQ } from '../../constants/Constants';
import { Modal } from 'react-bootstrap';
import ServiceRequestDetailsModal from './ServiceRequestDetailsModal';
import store from '../../store';

class ServiceRequestDashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            showServiceReqDetailModal:false,
            selectedServiceReq:{}
        }
    }

    componentDidMount(){
        this.props.getAllServiceRequest();
        this.props.getAllCompanyEmployees();
    }

    openServiceReqDetailModal = (id) => {

        const serviceReq = this.props.serviceRequests.filter(request => request.id===id)[0];
        this.setState({
            showServiceReqDetailModal:true,
            selectedServiceReq:serviceReq
        });
    }

    closServiceReqDetailModal =(isRefresReq) => {

        if(isRefresReq){
            window.location.reload(false);
        }

        this.setState({
            showServiceReqDetailModal:false,
            selectedServiceReq:{}
        });
    }

    render() {

        const {serviceRequests} = this.props;

        let serviceReqComponent=[];

        let pendingReq=[];
        let inProgressReq=[];
        let completedReq=[];
        let cancelledReq=[];


        if(serviceRequests!=null && serviceRequests.length>0){

            for(let i=0;i<serviceRequests.length;i++){
                const request = serviceRequests[i];
                serviceReqComponent.push(
                    <ServiceReqestItem 
                            key={request.id}  
                            serviceRequest = {request}    
                            openServiceReqDetailModal={this.openServiceReqDetailModal}
                            />
                )
            }


            for(let i=0;i<serviceReqComponent.length;i++){
            
                let component = serviceReqComponent[i];
                let statusCode=component.props.serviceRequest.statusCode;
    
                if(statusCode===PENDING_SERVICE_REQ){
                    pendingReq.push(component);
                }else if(statusCode===ASSIGNED_SERVICE_REQ || statusCode===INPROGRESS_SERVICE_REQ){
                    inProgressReq.push(component);
                }else if(statusCode===COMPLETED_SERVICE_REQ){
                    completedReq.push(component);
                }else  if(statusCode===CANCELED_SERVICE_REQ){
                    cancelledReq.push(component);
                }else{
                    cancelledReq.push(component);
                }
    
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
                        serviceRequest = {this.state.selectedServiceReq}
                        arrAllEmployee={this.props.employees}
                        closServiceReqDetailModal= {this.closServiceReqDetailModal}

                    />
                </Modal.Body>

            </Modal>

           </div>
        )
    }
}

ServiceRequestDashboard.propTypes = {
    getAllServiceRequest : PropTypes.func.isRequired,
    getAllCompanyEmployees: PropTypes.func.isRequired,
    serviceRequests : PropTypes.array.isRequired,
    employees:PropTypes.array.isRequired,
}

const mapStateToProp = (state)=>({
    serviceRequests:state.serviceRequest.serviceRequests,
    employees:state.employee.employees,
})

export default connect(mapStateToProp,{getAllServiceRequest,getAllCompanyEmployees})(ServiceRequestDashboard);
