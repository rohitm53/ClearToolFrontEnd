import React, { Component } from 'react';
import Select from 'react-select'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postAssignEmployeeRequest} from '../../actions/serviceRequestActions';
import { ASSIGNED_SERVICE_REQ, INPROGRESS_SERVICE_REQ, PENDING_SERVICE_REQ } from '../../constants/Constants';
import store from '../../store';
import { GET_ERRORS } from '../../actions/types';

class ServiceRequestDetailsModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedEmployee:{},
        }
    }

    componentWillReceiveProps(nextProps){


        if (nextProps.errors.assignedEmployeeCode) {
           alert("Please select employee.")
           store.dispatch({
            type: GET_ERRORS,
            payload: {}
          });
        
        }
        
        if(nextProps.availableEmployeeCode){
            let arrAvailableEmployee= [];
            const {availableEmployeeCode,arrAllEmployee} = nextProps;
            arrAllEmployee.forEach(employee => {
                if(availableEmployeeCode.includes(employee.employeeCode)){
                    arrAvailableEmployee.push(employee);
                }
            });

            this.setState({
                arrAvailableEmployee
            });
        }
    
    }
   
    handleSelect = (selection) => {
       this.setState({
              selectedEmployee:selection
       });
    }  
    
    
    onSubmit= (e) => {

        const {serviceRequest} = this.props;
        if(serviceRequest.statusCode===PENDING_SERVICE_REQ){
            const assignEmployeeRequest =  {
                serviceReqCode : serviceRequest.serviceReqCode,
                assignedEmployeeCode:this.state.selectedEmployee.employeeCode
            }
            this.props.postAssignEmployeeRequest(assignEmployeeRequest);
            this.props.closeServiceReqDetailModal(true);
        }else{
            this.props.closeServiceReqDetailModal(false);
        }
      
    }


    render() {
        const {serviceRequest , availableEmployees} = this.props;
        let assignEmployeeCol;
        if(serviceRequest.statusCode===PENDING_SERVICE_REQ){
            assignEmployeeCol= (
                <Select
                    name="Select Employee"
                    options={availableEmployees}
                    getOptionLabel = {(employee)=>employee.firstName + employee.lastName}
                    getOptionValue={(employee)=>employee.employeeCode}
                    onChange = {(selection,action)=>this.handleSelect(selection)}
                />
            );
        }else{
            assignEmployeeCol = (
                <div>
                    <div className="font-weight-bold">{serviceRequest.assignedEmployeeName} ({serviceRequest.assignedEmployeeCode}) </div>
                    <div className="font-weight-bold"> Ph: {serviceRequest.assignedEmployeeMobile}</div>
                </div>
            );
        }


            return (
                <div className="card">
                <div className="card-body boder-danger">
    
                    <h5 className="card-title d-inline">User : {serviceRequest.mobileUserName}</h5>
                    <h5 className="card-title d-inline ml-5">Code : {serviceRequest.mobileUserCode}</h5>


                    <table className="table table-bordered mt-2">
                        <thead>
                            <tr>
                                <th scope="col">Service Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Assigne Employee</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{serviceRequest.serviceName}</td>
                                {serviceRequest.scheduleDate && (
                                    <td>{ serviceRequest.scheduleDate}</td>
                                )}
                                {serviceRequest.scheduleTime && (
                                    <td>{serviceRequest.scheduleTime } hrs</td>
                                )}
                                <td>
                                    {assignEmployeeCol}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
                 <div className="card-footer">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <button className="btn btn-success btn-md center-block" style={{width:100}} 
                               onClick={this.onSubmit.bind(this)} >OK</button>
                            <button className="btn btn-danger btn-md center-block ml-5" style={{width:100}}
                                onClick = {this.props.closeServiceReqDetailModal.bind(this,false)}
                            >Cancel</button>
                        </div>
                    </div>
                       
                </div>
                </div>
            )
      
    }
}

ServiceRequestDetailsModal.propTypes = {
    postAssignEmployeeRequest:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

 function mapStateToProp(state) {
     return {
        errors: state.errors
     }
}


export default connect(mapStateToProp,{postAssignEmployeeRequest})(ServiceRequestDetailsModal);
