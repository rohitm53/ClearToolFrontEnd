import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getDashboardReportbyCompanyCode } from '../../actions/dashboardActions';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceCount: 0,
            employeeCount: 0,
            assetCount: 0
        }
    }

    componentDidMount() {
        this.props.getDashboardReportbyCompanyCode(this.props.companyCode);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.availableResource) {
            const { availableResource } = nextProps;
            this.setState({
                serviceCount: availableResource.serviceCount,
                employeeCount: availableResource.employeeCount,
                assetCount: availableResource.assetCount
            });
        }

    }

    render() {
        return (
            <div className="container mt-3">
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
                        <Link to="/assetlist">
                            <p className="text-primary text-justify"><b>Add Assets</b></p>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link>
                            <p className="text-primary text-justify"><b>Update Contacts</b></p>
                        </Link>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <b className="text-muted">Available Resource</b>
                        <table className="table table-bordered text-center table-secondary">
                            <thead className="bg-danger">
                                <tr className="text-white">
                                    <th>Service</th>
                                    <th>Employee</th>
                                    <th>Assets</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.serviceCount}</td>
                                    <td>{this.state.employeeCount}</td>
                                    <td>{this.state.assetCount}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propType = {
    availableResource: PropTypes.object.isRequired,
    getDashboardReportbyCompanyCode: PropTypes.func.isRequired,
    companyCode: PropTypes.string.isRequired
}

const mapStateToProp = state => ({
    availableResource: state.dashboardState.availableResource,
    companyCode: state.loginState.companyCode
});

export default connect(mapStateToProp, { getDashboardReportbyCompanyCode })(Dashboard);
