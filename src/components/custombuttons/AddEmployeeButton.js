import React from 'react';
import {Link} from 'react-router-dom'

const AddEmployeeButton = (props) => {
    return(
        <React.Fragment>
            <Link className="btn btn-primary" to="/addemployee">Add Employee</Link>
        </React.Fragment>
    );
}
export default AddEmployeeButton;
