import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'
import { fetchFoxNews } from '../actions/foxNewsActions.js';
import NewsArticle from '../components/NewsArticle.js'
import { saveArticle } from '../actions/saveArticlesActions.js'


import '../App.css';

class FoxNews extends Component {

  componentDidMount() {
     this.props.fetchFoxNews()
  }

  render() {
     let i = 0;

      return (
        <div>
          <Header title="Fox" />
          {this.props.news.map(article=><NewsArticle key={i += 1} article={article} saveArticle={this.props.saveArticle} />)}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {news: state.foxNews}
}


export default connect(mapStateToProps, {fetchFoxNews, saveArticle})(FoxNews);
