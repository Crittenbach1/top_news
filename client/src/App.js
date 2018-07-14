import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import BbcNews from './components/BbcNews.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Top News</h1>
        </header>
        <Router>
          <div>
            <NavBar />
            <Route path="/" component={BbbNews} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
