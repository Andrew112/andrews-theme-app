import React, { Component } from 'react';
import FetchStudents from './components/FetchStudents';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <FetchStudents />
      </div>
    );
  }
}

export default App;
