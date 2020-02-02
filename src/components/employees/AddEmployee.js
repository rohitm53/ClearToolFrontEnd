import React, { Component } from 'react'

export default class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state= {
            firstName:'',
            lastName:'',
            gender:'',
            dateOfBirth:'',
            mobile:'',
            email:'',
            area:'',
            address:'',
        }   
    }

    render() {
        return (
            <div className="container">
                <h4 className="display-4 text-primary text-center">Add Employee</h4>
                <hr/>
                <div className="row">
                     <div className="col">
                       <form>
                           <div className="form-row">
                              <div className="form-group col-md-6">
                                 <label htmlFor="firstName">First Name</label>
                                 <input type="text" className="form-control" placeholder="First Name"/>
                              </div>
                              <div className="form-group col-md-6">
                                 <label htmlFor="lastName">Last Name</label>
                                 <input type="text" className="form-control" placeholder="Last Name"/>
                              </div>
                           </div>
                           
                       </form>
                     </div>
                </div>
            </div>
        )
    }
}
