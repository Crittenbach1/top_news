import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'
import { fetchBbcNews } from '../actions/bbcNewsActions.js';
import '../App.css';

class BbcNews extends Component {

  componentDidMount() {
     this.props.fetchBbcNews()
  }


  render() {


      return (
        <div>
          <Header title="BBC Top News" />

        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {news: state.news}
}


export default connect(mapStateToProps, {fetchBbcNews})(BbcNews);
