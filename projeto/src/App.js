import React, { Component } from 'react'
import Navbar from './layout/navbar'
import './app.css'
import Router from './router'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className='clearfixApp'></div>
        <div className='container grid-1280'>
          <Router></Router>
        </div>
        
      </div>
      
    );
  }
}

export default App
