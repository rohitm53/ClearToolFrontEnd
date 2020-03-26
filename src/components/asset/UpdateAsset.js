import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAssetByAssetCode, postAsset } from '../../actions/assetActions';



class UpdateAsset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            code: '',
            name: '',
            quantity: '',
            companyCode: '',
            error: {}
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const asset = {
            id: this.state.id,
            code: this.state.code,
            companyCode: this.state.companyCode,
            name: this.state.name,
            quantity: this.state.quantity
        }

        this.props.postAsset(asset, this.props.history)
    }

    componentDidMount() {
        this.props.getAssetByAssetCode(this.props.match.params.assetcode);
    }

    componentWillReceiveProps(nextProps) {
        const { id, code, name, companyCode, quantity } = nextProps.asset;
        this.setState({
            id,
            code,
            name,
            companyCode,
            name,
            quantity
        });
    }

    render() {
        return (
            <div className="container">
                <h4 className="display-4 text-center text-primary">Update Asset</h4>
                <hr />
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="code">Asset Code</label>
                                <input type="text" className="form-control form-control-lg"
                                    name="code"
                                    value={this.state.code}
                                    onChange={this.onChange}
                                    disabled />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Asset Name</label>
                                <input type="text" className="form-control form-control-lg"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="quantity">Asset Quantity</label>
                                        <input type="number" className="form-control form-control-lg"
                                            name="quantity"
                                            value={this.state.quantity}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                <div className="col">

                                </div>
                            </div>
                            <input type="submit" value="Submit" className="btn btn-primary btn-block" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

UpdateAsset.propType = {
    getAssetByAssetCode: PropTypes.func.isRequired,
    postAsset: PropTypes.func.isRequired,
    asset: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    asset: state.asset.asset,
    error: state.error
})


export default connect(mapStateToProp, { postAsset, getAssetByAssetCode })(UpdateAsset);
