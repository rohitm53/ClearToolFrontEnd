import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../store';
import { getAllCompanyEmployees } from '../../actions/employeeActions';
import AddEmployeeButton from '../custombuttons/AddEmployeeButton';
import EmployeeItem from './EmployeeItem';
import {showLoader,hideLoader} from '../../actions/applicationAction';

class EmployeeListDashboard extends Component {

    componentDidMount() {
        this.props.getAllCompanyEmployees();
    }

    onSearchHit = () => {
        store.dispatch(showLoader());
        setTimeout(()=> {
            store.dispatch(hideLoader());
        },3000);
    }

    render() {
        const employees = this.props.employee.employees;
        return (
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input type="text" placeholder="--Search Employee by name/code/phone/email." className="form-control" />
                            <div className="input-group-append">
                                   <span className="input-group-text" onClick={this.onSearchHit.bind(this)}>
                                       <i class="fa fa-search" aria-hidden="true"></i>
                                   </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 ml-auto">
                            <AddEmployeeButton />
                    </div>

                </div>
                <div className="row wrapper-4-item my-4">
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
EmployeeListDashboard.propTypes = {
    getAllCompanyEmployees: PropTypes.func.isRequired,
    employee: PropTypes.object.isRequired,
    companyCode: PropTypes.string.isRequired
}

const mapStateToProp = state => ({
    employee: state.employee,
    companyCode: state.security.companySecurityInfo.companyCode
})

export default connect(mapStateToProp, { getAllCompanyEmployees })(EmployeeListDashboard);
