import React, { Component } from 'react';

class EmployeeServiceCheckbox extends Component {
    render() {
        const { companyService } = this.props;
        return (
            <div className="wrapper-2-item">
                {
                    companyService.map(service => {
                        return (
                            <div className="form-check" key={service.serviceCode}>
                                <label className="form-check-lable">
                                    <input type="checkbox" className="form-check-input"
                                        value={service.serviceCode}
                                        onChange={(e) => this.props.onServiceChecked(e, this.props.employeeCode)}
                                    />
                                    {service.serviceName}
                                </label>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}
export default EmployeeServiceCheckbox;
