import React from 'react';
import { Link } from 'react-router-dom'

const AssignService = (props) => {
    return (
        <React.Fragment>
            <Link className="btn btn-info" to="/assignservice">Assign Service</Link>
        </React.Fragment>
    );
}
export default AssignService;
