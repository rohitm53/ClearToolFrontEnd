import React from 'react';
import { Link } from 'react-router-dom'

const AddAssetButton = (props) => {
    return (
        <React.Fragment>
            <Link className="btn btn-primary" to="/createasset">Add Asset</Link>
        </React.Fragment>
    );
}
export default AddAssetButton;
