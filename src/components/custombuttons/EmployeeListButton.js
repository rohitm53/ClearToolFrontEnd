import React from 'react';
import {Link} from 'react-router-dom';

const EmployeeListButton = (props) => {
    return(
        <React.Fragment>
            <Link className="btn btn-secondary" to="/employeelist">Empoyee List</Link>
        </React.Fragment>
    );
}

export default EmployeeListButton;