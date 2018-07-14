import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'
import { fetchFoxNews } from '../actions/foxNewsActions.js';
import NewsArticle from '../components/NewsArticle.js'

import '../App.css';

class FoxNews extends Component {

  componentDidMount() {
     this.props.fetchFoxNews()
  }

  render() {
     let i = 0;

      return (
        <div>
          <Header title="Top Fox News" />
          {this.props.news.map(article=><NewsArticle key={i += 1} article={article} />)}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {news: state.bbcNews}
}


export default connect(mapStateToProps, {fetchFoxNews})(FoxNews);
