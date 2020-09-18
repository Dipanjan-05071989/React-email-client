import React, { Component } from 'react';
import NavBar from './component/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import MainContainer from './component/containers/Main/MainContainer';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <NavBar title="React Email client" user="dbhattacharya521@gmail.com" />
        <BrowserRouter>
        <MainContainer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
