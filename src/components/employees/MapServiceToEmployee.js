import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCompanyEmployees, getEmployeeServicebyCompany } from '../../actions/employeeActions';
import { getServiceByCompanyCode } from '../../actions/serviceActions';
import EmployeeServiceCheckbox from './EmployeeServiceCheckbox';

class MapServiceToEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            employeeService: [],
            companyService: [],
            employeeSerrvice: []
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
    }

    onServiceChecked = (e, employeeCode) => {
        console.log("Selected Service : ", e.target.value);
        console.log("Selected Checked : ", e.target.checked);
        console.log("Selected Employee : ", employeeCode);
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
                                                />

                                            </td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="text-center my-3 ">
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
        )
    }
}

MapServiceToEmployee.propType = {
    employees: PropTypes.array.isRequired,
    getAllCompanyEmployees: PropTypes.func.isRequired,
    getEmployeeServicebyCompany: PropTypes.func.isRequired,
    company_selected_service: PropTypes.array.isRequired
}

const mapStateToProp = state => ({
    employees: state.employee.employees,
    employeeService: state.employee.employeeService,
    companyService: state.service.companyService
})

export default connect(mapStateToProp, {
    getAllCompanyEmployees, getEmployeeServicebyCompany,
    getServiceByCompanyCode
})(MapServiceToEmployee);
