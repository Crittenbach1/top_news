import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import bbcNews from './containers/bbcNews.js'
import foxNews from './containers/foxNews.js'
import Footer from './components/Footer.js'
import NavBar from './components/NavBar.js'

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
            <Route path="/bbcNews" component={bbcNews} />
            <Route path="/foxNews" component={foxNews} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
