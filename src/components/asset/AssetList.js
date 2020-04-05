import React, { Component } from 'react'
import AddAssetButton from '../custombuttons/AddAssetButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCompanyAssets } from '../../actions/assetActions';
import AssetItem from './AssetItem';

class AssetList extends Component {

    componentDidMount() {
        this.props.getAllCompanyAssets("WINIT");
    }


    render() {

        const { assets } = this.props.asset

        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <AddAssetButton />
                    </div>
                </div>
                <div className="wrapper-5-item my-4">
                    {
                        assets.map(asset => {
                            return (<AssetItem
                                key={asset.id}
                                asset={asset}
                                history={this.props.history}
                            />)
                        })
                    }
                </div>


            </div>
        )
    }
}

AssetList.propType = {
    asset: PropTypes.object.isRequired,
    getAllCompanyAssets: PropTypes.func.isRequired

}

const mapStateToProp = state => ({
    asset: state.asset
});


export default connect(mapStateToProp, { getAllCompanyAssets })(AssetList);
