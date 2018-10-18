import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'
import { fetchBbcNews } from '../actions/bbcNewsActions.js';
import NewsArticle from '../components/NewsArticle.js'

import '../App.css';

class BbcNews extends Component {

  componentDidMount() {
     this.props.fetchBbcNews()
  }

  render() {
     let i = 0; // package shortID: optional todo

      return (
        <div>
          <Header title="BBC Top News" />
          {this.props.news.map(article=><NewsArticle key={i += 1} article={article} fetch={this.props.fetchBbcNews()}/>)}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {news: state.bbcNews}
}


export default connect(mapStateToProps, {fetchBbcNews})(BbcNews);
