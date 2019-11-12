import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
        </div>
      </Router>
    )
  }
}
export default App;