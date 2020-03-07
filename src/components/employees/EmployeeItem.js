import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEmployeeByCode } from '../../actions/employeeActions';

class EmployeeItem extends Component {

    onEmployeeDelete = (employeeCode) => {
        this.props.deleteEmployeeByCode(employeeCode);
    }

    render() {
        const { employee } = this.props;
        return (
            <div className="container mb-3">
                <div className="card">
                    <div className="card-header employee-card-header text-white">
                        {employee.firstName + " " + employee.lastName}
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="card-title">{employee.area}</h4>
                                <p className="card-text">{employee.mobile}</p>
                            </div>
                            <div className="col-md-4">
                                <Link to="/updateemployee" className="btn btn-info mb-2">Update Details</Link>
                                <button className="btn btn-danger" onClick={this.onEmployeeDelete.bind(this, employee.employeeCode)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

EmployeeItem.propTypes = {
    deleteEmployeeByCode: PropTypes.func.isRequired
}
export default connect(null, { deleteEmployeeByCode })(EmployeeItem);
