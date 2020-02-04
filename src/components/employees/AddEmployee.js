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

                           <div className="form-row">
                              <div className="form-group col-md-6">
                                 <label htmlFor="dob">Date of Birth</label>
                                 <input type="date" className="form-control" placeholder="Date of Birth"/>
                              </div>
                              <div className="form-group col-md-6 mt-4 pt-3">
                              <label htmlFor="gender" className="mr-3">Gender</label>
                                   <div className="form-check form-check-inline">
                                       <input className="form-check-input" type="radio" name="male" id="male" value="male"/>
                                       <label className="form-check-label">Male</label>
                                   </div> 
                                   <div className="form-check form-check-inline mr-5">
                                       <input className="form-check-input" type="radio" name="female" id="female" value="female"/>
                                       <label className="form-check-label">Female</label>
                                   </div> 
                              </div>
                           </div>
                           
                           <div className="form-row">
                              <div className="form-group col-md-6">
                                 <label htmlFor="mobile">Mobile</label>
                                 <input type="number" className="form-control" placeholder="Mobile"/>
                              </div>
                              <div className="form-group col-md-6">
                                 <label htmlFor="email">Email</label>
                                 <input type="text" className="form-control" placeholder="Email" maxLength="10"/>
                              </div>
                           </div>

                           <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Address</label>
                                    <textarea type="text" className="form-control" placeholder="Address" ></textarea>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="area">Area</label>
                                    <input type="text" className="form-control" placeholder="Area"/>
                               </div>
                           </div>

                        <input type="submit" value="submit" className="btn btn-primary"/>

                       </form>
                     </div>
                </div>
            </div>
        )
    }
}
