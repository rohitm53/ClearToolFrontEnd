import React, { Component } from 'react'
import AddEmployeeButton from '../custombuttons/AddEmployeeButton'

class EmployeeList extends Component {
    render() {
        return (
           <div className="container">
               <AddEmployeeButton/>
           </div>
        )
    }
}
export default EmployeeList;
