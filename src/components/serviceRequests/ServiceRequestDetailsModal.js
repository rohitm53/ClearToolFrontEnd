import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap'

class ServiceRequestDetailsModal extends Component {
    render() {
        return (

            <div className="card">
            <div className="card-body boder-danger">

                <h5 class="card-title">User : Rohit Manohar</h5>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Assigne Employee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Utensils</td>
                            <td>22-10-2020</td>
                            <td>11:00 AM</td>
                            <td>
                            
                            <Dropdown>
                                    <Dropdown.Toggle variant="success" id="emplpyeeDropDown">
                                        Select Employee
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item >Rohit Manohar</Dropdown.Item>
                                        <Dropdown.Item >Anirudra Das</Dropdown.Item>
                                        <Dropdown.Item >Vinit Pandey</Dropdown.Item>
                                        <Dropdown.Item >Abhijeet Paul</Dropdown.Item>
                                    </Dropdown.Menu>

                            </Dropdown>

                            </td>
                        </tr>
                    </tbody>
                </table>
             </div>
             <div className="card-footer">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <button className="btn btn-success btn-md center-block" style={{width:100}} >OK</button>
                        <button className="btn btn-danger btn-md center-block ml-5" style={{width:100}}>Cancel</button>
                    </div>
                </div>
                   
            </div>
            </div>
        )
    }
}

export default ServiceRequestDetailsModal;
