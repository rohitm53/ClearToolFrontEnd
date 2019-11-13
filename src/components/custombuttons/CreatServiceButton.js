import React from 'react';
import {Link} from 'react-router-dom';

const CreatServiceButton = (props) => {
    return(
        <React.Fragment>
            <Link className="btn btn-primary" to="/addservice">Creat Service</Link>
        </React.Fragment>
    );
}

export default CreatServiceButton;
