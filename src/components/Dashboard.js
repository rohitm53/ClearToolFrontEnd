import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/addservice">
                            <p className="text-primary text-justify"><b>Add Service</b></p>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/employeelist">
                            <p className="text-primary text-justify"><b>Add Employee</b></p>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link>
                            <p className="text-primary text-justify"><b>Add Assets</b></p>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link>
                            <p className="text-primary text-justify"><b>Update Contacts</b></p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;
