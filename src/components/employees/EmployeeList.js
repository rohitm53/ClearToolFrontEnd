import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getEmployees} from '../../actions/employeeActions';
import AddEmployeeButton from '../custombuttons/AddEmployeeButton';
import EmployeeItem from './EmployeeItem';

class EmployeeList extends Component {

    componentDidMount(){
        this.props.getEmployees();
    }
    render() {
        const employees = this.props.employee.employees;
        return (
           <div className="container">
               <AddEmployeeButton/>
                <div className="wrapper-2-item my-4">
                     {
                         employees.map(employee => {
                            return( <EmployeeItem employee={employee}/>)
                        })
                     }
                </div>
           </div>
        )
    }
}
EmployeeList.propTypes = {
    getEmployees:PropTypes.func.isRequired,
    employee:PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    employee:state.employee
})

export default connect(mapStateToProp,{getEmployees})(EmployeeList);
