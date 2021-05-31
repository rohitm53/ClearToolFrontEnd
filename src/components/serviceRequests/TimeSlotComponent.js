import React, { Component } from 'react'
import {connect} from 'react-redux';

class TimeSlotComponent extends Component {

    constructor(props){
        super(props);
    }


    render() {

        let timeSlotsViews = [];

        const {availableTimeSlots ,onGenerateTimeSlotsClicks} = this.props;

        if(availableTimeSlots!=null && availableTimeSlots.length>0){

            for(let i=0 ; i<availableTimeSlots.length; i++){
                const timeSlot = availableTimeSlots[i];
                timeSlotsViews.push(
                    <div className="btn btn-info btn-sm m-1">{timeSlot.time} hrs<br/>
                        <span class="badge badge-light">{timeSlot.availableEmployeeCount} mp</span>
                    </div>
                );
            }
        }else{
            timeSlotsViews.push(
                <button className="btn btn-outline-danger" 
                        onClick = {onGenerateTimeSlotsClicks.bind(this)}>
                        Generate Time Slots
                </button>
            );
        }

        return (
            <div className="container">
              <h6 className="font-weight-bold">Available Time Slots </h6>
              <div className="row">
                    {  
                        timeSlotsViews
                    }
              </div>
            </div>
        )
    }
}
 
const mapStateToProp = (state)=>({

});

export default connect(mapStateToProp,{})(TimeSlotComponent);
