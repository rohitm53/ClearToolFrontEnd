import React, { Component } from 'react'
import ServiceReqestItem from './ServiceReqestItem';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    getAllServiceRequest
} from '../../actions/serviceRequestActions';

import { 
    getAllCompanyEmployees
 } from '../../actions/employeeActions';

import {
    generateCompanyTimeSlotsForDate,
    getCompanyAvailableTimeSlotsByDate
} from '../../actions/timeSlotsAction';

import {
     ASSIGNED_SERVICE_REQ, CANCELED_SERVICE_REQ, 
     COMPLETED_SERVICE_REQ, 
    INPROGRESS_SERVICE_REQ, 
    PENDING_SERVICE_REQ } from '../../constants/Constants';
import {
    Start_TIME,
    End_TIME
}   from '../../constants/Constants' 
import { Modal } from 'react-bootstrap';
import ServiceRequestDetailsModal from './ServiceRequestDetailsModal';
import TimeSlotComponent from './TimeSlotComponent';

class ServiceRequestDashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            showServiceReqDetailModal:false,
            selectedServiceReq:{},
            selected_date: new Date().toISOString().split('T')[0]
        }
    }

    componentDidMount(){
        this.props.getAllServiceRequest();
        this.props.getAllCompanyEmployees();
        this.props.getCompanyAvailableTimeSlotsByDate(this.state.selected_date);
    }

    openServiceReqDetailModal = (id) => {

        const serviceReq = this.props.service_requests.filter(request => request.id===id)[0];
        this.setState({
            showServiceReqDetailModal:true,
            selectedServiceReq:serviceReq
        });
    }

    closeServiceReqDetailModal =(isRefresReq) => {

        if(isRefresReq){
          window.location.reload(false);
        }

        this.setState({
            showServiceReqDetailModal:false,
            selectedServiceReq:{}
        });
    }

    onDateSelected = (e) => {
        this.setState({selected_date:e.target.value} , ()=> {
            this.props.getCompanyAvailableTimeSlotsByDate(this.state.selected_date);
        })
    }

    onGenerateTimeSlotsClicks = (e) => {
        e.preventDefault();
        const request = {
            currentDate:this.state.selected_date,
            startTime : Start_TIME,
            endTime : End_TIME
        }
        this.props.generateCompanyTimeSlotsForDate(request);
    }

    render() {


        const {service_requests , available_time_slots} = this.props;
        const {selected_date} = this.state;

        let serviceReqComponent=[];

        let pendingReq=[];
        let inProgressReq=[];
        let completedReq=[];
        let cancelledReq=[];

        if(service_requests!=null && service_requests.length>0){

            for(let i=0;i<service_requests.length;i++){
                const request = service_requests[i];
                if(request.scheduleDate===selected_date) {
                    serviceReqComponent.push(
                        <ServiceReqestItem 
                                key={request.id}  
                                serviceRequest = {request}    
                                openServiceReqDetailModal={this.openServiceReqDetailModal}
                                />
                    )
                }
               
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
                    <form className="col-md-3">
                            <div className="form-group my-2">
                                <h6 className="font-weight-bold">Date</h6>
                                <input type="date" className="form-control" 
                                    value={this.state.selected_date}
                                    name="selected_date"
                                    onChange={this.onDateSelected} />
                            </div>
                    </form>
                    <div className="col-9 my-2">
                        <TimeSlotComponent 
                            availableTimeSlots = {available_time_slots}   
                            onGenerateTimeSlotsClicks = {this.onGenerateTimeSlotsClicks}
                        />
                    </div>
                </div>
        
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
                    onHide={this.closeServiceReqDetailModal}
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
                            closeServiceReqDetailModal= {this.closeServiceReqDetailModal}

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
    service_requests : PropTypes.array.isRequired,
    employees:PropTypes.array.isRequired,
}

const mapStateToProp = (state)=>({
    service_requests:state.serviceRequest.service_requests,
    employees:state.employee.employees,
    available_time_slots: state.timeSlots.available_time_slots,
})

export default connect(mapStateToProp,{
    getAllServiceRequest,
    getAllCompanyEmployees,
    generateCompanyTimeSlotsForDate,
    getCompanyAvailableTimeSlotsByDate,
})(ServiceRequestDashboard);
