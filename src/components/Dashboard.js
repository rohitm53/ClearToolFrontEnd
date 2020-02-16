import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/assignservice">
                            <p className="text-primary text-justify"><b>Add Service</b></p>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/employeelist">
                            <p className="text-primary text-justify"><b>Add Employee</b></p>
                        </Link>
                    </div>
                    <div className="col">
                        <Link>
                            <p className="text-primary text-justify"><b>Add Assets</b></p>
                        </Link>
                    </div>
                    <div className="col">
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
