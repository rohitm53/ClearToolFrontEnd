import React, { Component } from 'react'
import CreatServiceButton from './custombuttons/CreatServiceButton'

class Dashboard extends Component {
    render() {
        return (
           <div className="container">
               <CreatServiceButton/>
           </div>
        )
    }
}

export default Dashboard;
