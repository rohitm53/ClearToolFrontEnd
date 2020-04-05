import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SecuredRoute = ({ component: Component, companyCode, ...otherProps }) => (
    <Route {...otherProps} render={props => companyCode.length > 0 ?
        (<Component {...props} />) : (<Redirect to="/" />)
    } />
)

SecuredRoute.propType = {
    companyCode: PropTypes.string.isRequired
}

const mapStateToProp = state => ({
    companyCode: state.loginState.companyCode
});

export default connect(mapStateToProp)(SecuredRoute);