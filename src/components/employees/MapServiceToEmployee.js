import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    getAllCompanyEmployees, getEmployeeServicebyCompany,
    postEmployeeService
} from '../../actions/employeeActions';
import { getServiceByCompanyCode } from '../../actions/companyServiceActions';
import EmployeeServiceCheckbox from './EmployeeServiceCheckbox';
import hashmap from 'hashmap';


class MapServiceToEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            employeeService: [],
            companyService: [],
            hmEmployeeService: new hashmap()
        }
    }

    componentDidMount() {
        this.props.getAllCompanyEmployees('WINIT');
        this.props.getEmployeeServicebyCompany("WINIT");
        this.props.getServiceByCompanyCode("WINIT");
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.employees) {
            this.setState({ employees: nextProps.employees });
        }
        if (nextProps.companyService) {
            this.setState({ companyService: nextProps.companyService });
        }
        if (nextProps.employeeService) {
            const { employeeService } = nextProps;
            if (employeeService.length > 0) {
                var hmEmployeeService = new hashmap();
                for (let i = 0; i < employeeService.length; i++) {
                    hmEmployeeService.set(employeeService[i].employeeCode, employeeService[i].serviceCodes);
                }
                this.setState({ hmEmployeeService: hmEmployeeService });
            }
        }
    }

    onServiceChecked = (e, employeeCode) => {
        const { hmEmployeeService } = this.state;
        let serviceCode = e.target.value;
        let checkedStatus = e.target.checked;
        if (hmEmployeeService.has(employeeCode)) {
            var arrServiceCode = [];
            arrServiceCode = hmEmployeeService.get(employeeCode);
            if (checkedStatus) {
                arrServiceCode.push(serviceCode);
                hmEmployeeService.set(employeeCode, arrServiceCode);
            } else {
                var arrServiceCode = arrServiceCode.filter(item => item !== serviceCode);
                hmEmployeeService.set(employeeCode, arrServiceCode);
            }
        } else {
            if (checkedStatus) {
                var arrServiceCode = [];
                arrServiceCode.push(serviceCode);
                hmEmployeeService.set(employeeCode, arrServiceCode);
            } else {

            }
        }
        this.setState({ hmEmployeeService: hmEmployeeService });
    }


    isServiceChecked = (employeeCode, serviceCode) => {

        const { hmEmployeeService } = this.state;
        if (hmEmployeeService.has(employeeCode)) {
            return hmEmployeeService.get(employeeCode).some(item => item === serviceCode);
        } else {
            return false;
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { hmEmployeeService } = this.state;
        let employeeServiceRequest = {};
        let employeeServices = [];
        for (let key of hmEmployeeService.keys()) {
            var arrServiceCodes = [];
            arrServiceCodes = hmEmployeeService.get(key);
            if (arrServiceCodes.length !== 0) {
                var employeeService = {
                    employeeCode: key,
                    serviceCodes: arrServiceCodes
                };
                employeeServices.push(employeeService);
            }
        }
        employeeServiceRequest = {
            employeeServices,
            companyCode: "WINIT"
        }
        console.log("Final Object : ", employeeServiceRequest);
        this.props.postEmployeeService(employeeServiceRequest, this.props.history);

    }

    render() {

        const { employees, companyService } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className="display-5 text-primary text-center"><b>Assign Service</b></h4>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <table className="table table-bordered ">
                        <thead>
                            <tr className="text-center" >
                                <th scope="col">Employee</th>
                                <th scope="col-6">Select service to assign</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(employee => {
                                    return (
                                        <tr key={employee.employeeCode}>
                                            <td className="text-center">{employee.firstName + " " + employee.lastName}</td>
                                            <td className="text-justify" >
                                                <EmployeeServiceCheckbox
                                                    employeeCode={employee.employeeCode}
                                                    companyService={companyService}
                                                    onServiceChecked={this.onServiceChecked}
                                                    isServiceChecked={this.isServiceChecked}
                                                />

                                            </td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="text-center my-3 ">
                    <button className="btn btn-success" onClick={this.onSubmit.bind(this)} >Submit</button>
                </div>
            </div>
        )
    }
}

MapServiceToEmployee.propType = {
    employees: PropTypes.array.isRequired,
    getAllCompanyEmployees: PropTypes.func.isRequired,
    getEmployeeServicebyCompany: PropTypes.func.isRequired,
    company_selected_service: PropTypes.array.isRequired,
    postEmployeeService: PropTypes.func.isRequired
}

const mapStateToProp = state => ({
    employees: state.employee.employees,
    employeeService: state.employee.employeeService,
    companyService: state.service.companyService
})

export default connect(mapStateToProp, {
    getAllCompanyEmployees, getEmployeeServicebyCompany,
    getServiceByCompanyCode, postEmployeeService
})(MapServiceToEmployee);
