import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAssetByCode } from '../../actions/assetActions';

class AssetItem extends Component {


    onClick = (code) => {
        this.props.history.push(`/updateasset/${code}`);
    }
    onDelete = (code) => {
        this.props.deleteAssetByCode(code);
    }

    render() {

        const { asset } = this.props;

        return (
            <div className="container mb-3"  >
                <div className="card">
                    <div className="card-header asset-card-header text-white">
                        {asset.name + "-" + asset.code}

                    </div>
                    <div className="card-body asset-card-body">
                        <div className="row">
                            <div className="col">
                                <h6 className="card-title">{"Qty:" + asset.quantity}</h6>
                            </div>
                            <div className="col">
                                <i class="fa fa-pencil-square-o" aria-hidden="true"
                                    onClick={this.onClick.bind(this, asset.code)}></i>
                                <i className="fa fa-trash ml-3" onClick={this.onDelete.bind(this, asset.code)} ></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

AssetItem.propType = {
    deleteAssetByCode: PropTypes.func.isRequired
}

const mapStateToProp = state => ({

})

export default connect(mapStateToProp, { deleteAssetByCode })(AssetItem);
