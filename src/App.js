import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/organisms/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Dashboard />
      </div>
    );
  }
}

export default App;
