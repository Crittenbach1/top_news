import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'
import { fetchCnnNews } from '../actions/cnnNewsActions.js';
import NewsArticle from '../components/NewsArticle.js'

import '../App.css';

class CnnNews extends Component {

  componentDidMount() {
     this.props.fetchCnnNews()
  }

  render() {
     let i = 0;

      return (
        <div>
          <Header title="Top CNN News" />
          {this.props.news.map(article=><NewsArticle key={i += 1} article={article} />)}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {news: state.cnnNews}
}


export default connect(mapStateToProps, {fetchCnnNews})(CnnNews);
