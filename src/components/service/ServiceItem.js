import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import {deleteService} from '../../actions/serviceActions';

class ServiceItem extends Component {
  
    onServiceDelete = (id) => {
        this.props.deleteService(id);         
    }

    render() {
        const {service} = this.props;
        return (
            <div className="container">
                <div className="card service-item mb-4">
                    <div className="card-header">
                         {service.serviceCode}
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{service.serviceName}</h4>
                        {
                            service.noOfEmpReq!=null && service.noOfEmpReq>0 && (
                                <p className="card-text">Employee Req : {service.noOfEmpReq}</p>
                            )
                        }
                        <Link to={`/updateservice/${service.serviceCode}`} className="btn btn-info">View / Update</Link>
                        <button className="btn btn-danger ml-5" onClick={this.onServiceDelete.bind(this,service.serviceCode)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

ServiceItem.propTypes = {
    deleteService:PropTypes.func.isRequired
}

export default connect(null,{deleteService})(ServiceItem);
