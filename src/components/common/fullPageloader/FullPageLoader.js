import React, { Component } from 'react';
import {connect} from 'react-redux';
import './FullPageLoader.css';

class FullPageLoader extends Component {

    render() {
        const {isLoading} = this.props;
        
        if(!isLoading) return null;

        return (
            <div className="loader-container">
                <div className="loader">
                    <img src = {process.env.PUBLIC_URL + '/gifassets/loader.gif'}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    isLoading : state.application.isLoading
})

export default connect(mapStateToProps)(FullPageLoader);
