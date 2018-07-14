import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import bbcNews from './components/bbcNews.js'
import foxNews from './components/bbcNews.js'
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
            <Route path="/bbcNews" component={bbcNews} />
            <Route path="/foxNews" component={foxNews} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
