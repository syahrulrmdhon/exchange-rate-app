import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/layouts/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
            <Navbar/>
            <div className='container'>
            </div>
      </React.Fragment>
    );
  }
}

export default App;
