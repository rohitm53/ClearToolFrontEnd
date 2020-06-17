import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCompanyEmployees } from '../../actions/employeeActions';
import AddEmployeeButton from '../custombuttons/AddEmployeeButton';
import EmployeeItem from './EmployeeItem';
import AssignService from '../custombuttons/AssignService';

class EmployeeList extends Component {

    componentDidMount() {
        this.props.getAllCompanyEmployees(this.props.companyCode);
    }
    render() {
        const employees = this.props.employee.employees;
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <AddEmployeeButton />
                    </div>
                    <div className="col-md-3 text-left">
                        <AssignService />
                    </div>

                </div>
                <div className="wrapper-2-item my-4">
                    {
                        employees.map(employee => {
                            return (<EmployeeItem key={employee.employeeCode} employee={employee} />)
                        })
                    }
                </div>
            </div>
        )
    }
}
EmployeeList.propTypes = {
    getAllCompanyEmployees: PropTypes.func.isRequired,
    employee: PropTypes.object.isRequired,
    companyCode: PropTypes.string.isRequired
}

const mapStateToProp = state => ({
    employee: state.employee,
    companyCode: state.security.companySecurityInfo.companyCode
})

export default connect(mapStateToProp, { getAllCompanyEmployees })(EmployeeList);
