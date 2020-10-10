import React, { Component } from 'react'

class ConfirmEmployeeDetailsModal extends Component {

    render() {

        const {employee} = this.props;

        return (
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <p className="d-inline text-lg h6">Full Name :</p>
                        <p className="d-inline"> 
                                {employee.firstName + " "+ employee.middleName +" " + employee.lastName}
                        </p>

                        <br/>

                        <p className="d-inline text-lg h6">Mobile :</p>
                        <p className="d-inline"> {employee.mobile}</p>

                        <br/>

                        <p className="d-inline text-lg h6">Email :</p>
                        <p className="d-inline"> {employee.email}</p>
                    </div>

                    <div className="col">
                        <p className="d-inline text-lg h6">Date of Birth :</p>
                        <p className="d-inline"> {employee.dateOfBirth}</p>
                        <br/>
                        <p className="d-inline text-lg h6">Gender :</p>
                        <p className="d-inline"> {employee.gender}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p className="d-inline text-lg h6"> Adress : </p>
                        <p className="d-inline">
                            {employee.address + 
                            employee.area +   
                            employee.city + 
                            employee.country +
                            employee.pinCode}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmEmployeeDetailsModal;
