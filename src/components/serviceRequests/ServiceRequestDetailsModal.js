import React, { Component } from 'react';
import Select from 'react-select'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAvailableEmployeeForService,postAssignEmployeeRequest} from '../../actions/serviceRequestActions';
import { ASSIGNED_SERVICE_REQ, INPROGRESS_SERVICE_REQ, PENDING_SERVICE_REQ } from '../../constants/Constants';
import store from '../../store';
import { GET_ERRORS } from '../../actions/types';

class ServiceRequestDetailsModal extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            arrAvailableEmployee:[],
            selectedEmployee:{},
        }
    }

    componentDidMount(){
        const serviceCode = this.props.serviceRequest.serviceCode;
        this.props.getAvailableEmployeeForService(serviceCode);
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

        if(nextProps.assignEmployeeResponse.statusCode===ASSIGNED_SERVICE_REQ){
            this.props.closServiceReqDetailModal(true);
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
        }else{
            this.props.closServiceReqDetailModal(false);
        }
      
    }


    render() {
        const {serviceRequest} = this.props;
        let assignEmployeeCol;
        if(serviceRequest.statusCode===PENDING_SERVICE_REQ){
            assignEmployeeCol= (
                <Select
                    name="Select Employee"
                    options={this.state.arrAvailableEmployee}
                    getOptionLabel = {(employee)=>employee.firstName + employee.lastName}
                    getOptionValue={(employee)=>employee.employeeCode}
                    onChange = {(selection,action)=>this.handleSelect(selection)}
                />
            );
        }else{
            assignEmployeeCol = (
                <div>
                    <div className="font-weight-bold">{serviceRequest.assignedEmployeeName}</div>
                    <div className="font-weight-bold"> Ph: {serviceRequest.assignedEmployeeMobile}</div>
                </div>
            );
        }




        if(this.state.arrAvailableEmployee.length>0){
            return (
                <div className="card">
                <div className="card-body boder-danger">
    
                    <h5 className="card-title">User : {serviceRequest.mobileUserName}</h5>
    
                    <table className="table table-bordered">
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
                                {serviceRequest.scheduled && (
                                    <td>{ new Date(serviceRequest.scheduled).toDateString()}</td>
                                )}
    
                                {serviceRequest.scheduled && (
                                    <td>{ new Date(serviceRequest.scheduled).toISOString().substr(11,5)}</td>
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
                                onClick = {this.props.closServiceReqDetailModal.bind(this,false)}
                            >Cancel</button>
                        </div>
                    </div>
                       
                </div>
                </div>
            )
        }else{
          
            return(
                <div className="container">
                    <div className="alert alert-danger">
                        No Employee available for assigning this service
                    </div>
                    <div className="text-center">
                        <button className="btn btn-danger text-center" 
                                 onClick = {this.props.closServiceReqDetailModal.bind(this,false)}
                        >OK</button>
                    </div>
                
                </div>
            )

        }
    }
}

ServiceRequestDetailsModal.propTypes = {
    getAvailableEmployeeForService:PropTypes.func.isRequired,
    availableEmployeeCode:PropTypes.array.isRequired,
    postAssignEmployeeRequest:PropTypes.func.isRequired,
    assignEmployeeResponse:PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

 function mapStateToProp(state) {
     return {
        availableEmployeeCode:state.serviceRequest.availableEmployeeCode,
        assignEmployeeResponse:state.serviceRequest.assignEmployeeResponse,
        errors: state.errors
     }
}

// const mapStateToProp = (state) => ({
//     availableEmployeeCode:state.serviceRequest.availableEmployeeCode
// })

export default connect(mapStateToProp,{getAvailableEmployeeForService
    ,postAssignEmployeeRequest})(ServiceRequestDetailsModal);
