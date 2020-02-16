import React, { Component } from 'react'

class UpdateEmployee extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            gender:'',
            dateOfBirth:'',
            mobile:'',
            email:'',
            area:'',
            address:'',
            employeeCode:'',
            created_at:'',
            errors:{}
        }
    }

    render() {
        return (
            <div className="container">
                <h5 className="display-4 text-primary text-center">Update Employee Details</h5>
                <hr/>
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="First Name"
                                           name="firstName"
                                           value={this.state.firstName}
                                           disabled
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="last">Last Name</label>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Last Name"
                                           name="lastName"
                                           value={this.state.lastName}
                                           disabled
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateEmployee;
