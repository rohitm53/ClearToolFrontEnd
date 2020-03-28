import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import NavBar from './components/layouts/NavBar';
import Dashboard from './components/Dashboard';
import UpdateService from './components/service/UpdateService';
import EmployeeList from './components/employees/EmployeeList';
import AddEmployee from './components/employees/AddEmployee';
import UpdateEmployee from './components/employees/UpdateEmployee';
import AddService from './components/service/AddService';
import CreateService from './components/service/CreateService';
import MapServiceToEmployee from './components/employees/MapServiceToEmployee';
import CreateAsset from './components/asset/CreateAsset';
import AssetList from './components/asset/AssetList';
import UpdateAsset from './components/asset/UpdateAsset';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/createservice" component={CreateService} />
            <Route exact path="/updateservice/:serviceCode" component={UpdateService} />
            <Route exact path="/employeelist" component={EmployeeList} />
            <Route exact path="/addemployee" component={AddEmployee} />
            <Route exact path="/updateemployee/:employeecode" component={UpdateEmployee} />
            <Route exact path="/addservice" component={AddService} />
            <Route exact path="/assignservice" component={MapServiceToEmployee} />
            <Route exact path="/assetlist" component={AssetList} />
            <Route exact path="/createasset" component={CreateAsset} />
            <Route exact path="/updateasset/:assetcode" component={UpdateAsset} />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;