import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import NavBar from './components/layouts/NavBar';
import Dashboard from './components/Dashboard';
import AddService from './components/service/AddService';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
              <div className="App">
                  <NavBar />
                  <Route path="/dashboard" component={Dashboard}/>
                  <Route path="/addservice" component={AddService}/>
              </div>
            </Router>
        </Provider>
      );
  }
}
export default App;