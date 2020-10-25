import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { postEmployee } from '../../actions/employeeActions';
import { Modal } from 'react-bootstrap';
import ConfirmEmployeeDetailsModal from './ConfirmEmployeeDetailsModal';

class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            middleName: '',
            lastName: '',
            gender: '',
            dateOfBirth: '',
            mobile: '',
            email: '',
            area: '',
            address: '',
            city: '',
            country: '',
            pinCode: '',
            companyCode: '',
            errors: {},
            confirmModalShow : false
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const employee = this.generateEmployeeObject();
        this.props.postEmployee(employee, this.props.history);
    }


    generateEmployeeObject() {

        const employee = {
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            dateOfBirth: this.state.dateOfBirth,
            mobile: this.state.mobile,
            email: this.state.email,
            area: this.state.area,
            address: this.state.address,
            city: this.state.city,
            country: this.state.country,
            pinCode: this.state.pinCode,
            companyCode: this.props.companyCode
        }
         return employee;
    }

   

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                 errors: nextProps.errors ,
                 confirmModalShow:false
            });
        }
    }

    openComfirmModal = (e) => {
        e.preventDefault();
        this.setState({confirmModalShow:true})
    }

    closeComfirmModal = () => {
        this.setState({confirmModalShow:false})
    }


    render() {

        const { errors } = this.state;

        return (
            <div className="container mt-3">
                <h4 className="display-4 text-primary text-center">Add Employee</h4>
                <hr />
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.openComfirmModal.bind(this)}>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text"
                                        className={classnames("form-control", { "is-invalid": errors.firstName })}
                                        placeholder="First Name"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.firstName && (
                                            <div className="invalid-feedback">{errors.firstName}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="middlename">Middle Name</label>
                                    <input type="text"
                                        className={classnames("form-control", { "is-invalid": errors.middleName })}
                                        placeholder="Middle Name"
                                        name="middleName"
                                        value={this.state.middleName}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.middleName && (
                                            <div className="invalid-feedback">{errors.middleName}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text"
                                        className={classnames("form-control", { "is-invalid": errors.lastName })}
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.lastName && (
                                            <div className="invalid-feedback">{errors.lastName}</div>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="dob">Date of Birth</label>
                                    <input type="date"
                                        className={classnames("form-control", { "is-invalid": errors.dateOfBirth })}
                                        placeholder="Date of Birth"
                                        name="dateOfBirth"
                                        value={this.state.dateOfBirth}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.dateOfBirth && (
                                            <div className="invalid-feedback">{errors.dateOfBirth}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group col-md-6 mt-4 pt-3">
                                    <label htmlFor="gender" className="mr-3">Gender * </label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="male" value="male"
                                            checked={this.state.gender === 'male'}
                                            onChange={this.onChange}
                                        />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline mr-5">
                                        <input className="form-check-input" type="radio" name="gender" id="female" value="female"
                                            checked={this.state.gender === 'female'}
                                            onChange={this.onChange}
                                        />
                                        <label className="form-check-label">Female</label>
                                    </div>
                                    {
                                        errors.gender && (
                                            <div className="invalid-feedback">{errors.gender}</div>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="mobile">Mobile *</label>
                                    <input type="number"
                                        className={classnames("form-control", { "is-invalid": errors.mobile })}
                                        placeholder="Mobile" maxLength="10"
                                        name="mobile"
                                        value={this.state.mobile}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.mobile && (
                                            <div className="invalid-feedback">{errors.mobile}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email *</label>
                                    <input type="text"
                                        className={classnames("form-control", { "is-invalid": errors.email })}
                                        placeholder="Email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.email && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="address">Address *</label>
                                    <textarea type="text"
                                        className={classnames("form-control", { "is-invalid": errors.address })}
                                        placeholder="Address"
                                        name="address"
                                        value={this.state.address}
                                        onChange={this.onChange}
                                    ></textarea>
                                    {
                                        errors.email && (
                                            <div className="invalid-feedback">{errors.address}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="area">Area *</label>
                                    <input type="text"
                                        className={classnames("form-control", { "is-invalid": errors.area })}
                                        placeholder="Area"
                                        name="area"
                                        value={this.state.area}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.area && (
                                            <div className="invalid-feedback">{errors.area}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="city">City *</label>
                                    <input type="text"
                                        className={classnames("form-control", { "is-invalid": errors.city })}
                                        placeholder="City"
                                        name="city"
                                        value={this.state.city}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.city && (
                                            <div className="invalid-feedback">{errors.city}</div>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="country">Country *</label>
                                    <input type="text"
                                        className={classnames("form-control", { "is-invalid": errors.country })}
                                        placeholder="City"
                                        name="country"
                                        value={this.state.country}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.country && (
                                            <div className="invalid-feedback">{errors.country}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="pinCode">Pincode *</label>
                                    <input type="text"
                                        className={classnames("form-control", { "is-invalid": errors.pinCode })}
                                        placeholder="Pincode"
                                        name="pinCode"
                                        value={this.state.pinCode}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.pinCode && (
                                            <div className="invalid-feedback">{errors.pinCode}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group col-md-4 text-center">
                                    <input type="submit" value="Submit" className="btn btn-primary mt-4 mb-3" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
               
                <Modal show={this.state.confirmModalShow} 
                       onHide={this.closeComfirmModal} 
                       size="lg"
                       backdrop="static"
                       keyboard={false}
                       centered 
                >

                    <Modal.Header closeButton>
                         <Modal.Title>Confirm Employee Details</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                            <ConfirmEmployeeDetailsModal employee = {this.generateEmployeeObject()} />
                    </Modal.Body>

                    <Modal.Footer>

                        <button className="btn btn-danger" onClick={this.closeComfirmModal} >Cancel</button>
                        <button className="btn btn-success"  onClick={this.onSubmit} >Confirm</button>
                        
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}

AddEmployee.propTypes = {
    errors: PropTypes.object.isRequired,
    postEmployee: PropTypes.func.isRequired,
    companyCode: PropTypes.string.isRequired
}

const mapPropToState = (state) => ({
    errors: state.errors,
    companyCode: state.security.companySecurityInfo.companyCode
});

export default connect(mapPropToState, { postEmployee })(AddEmployee);