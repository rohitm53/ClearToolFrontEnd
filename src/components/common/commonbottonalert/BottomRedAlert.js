import React from 'react';
import {connect} from 'react-redux';

 const BottomRedAlert = (props)=> {
    return (
        <React.Fragment>
            <div className="row ">
                <div className="col">
                    <div class="alert alert-danger text-center" role="alert">
                        {props.errorMsg}
                    </div>
                </div>
            </div>
        </React.Fragment>
       
    )
}
const mapStateToProp = ()=> ({

})
export default connect(mapStateToProp)(BottomRedAlert); 
