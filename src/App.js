import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import NavBar from './components/layouts/NavBar';
import Dashboard from './components/Dashboard';
import AddService from './components/service/AddService';
import UpdateService from './components/service/UpdateService';
import EmployeeList from './components/employees/EmployeeList';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
              <div className="App">
                  <NavBar />
                  <Route exact path="/dashboard" component={Dashboard}/>
                  <Route exact path="/addservice" component={AddService}/>
                  <Route exact path="/updateservice/:serviceCode" component={UpdateService}/>
                  <Route exact path="/employeelist" component={EmployeeList}/>
              </div>
            </Router>
        </Provider>
      );
  }
}
export default App;