import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'
import NewsArticle from '../components/NewsArticle.js'
import { saveArticle } from '../actions/saveArticlesActions.js'


import '../App.css';

class BbcNews extends Component {

  constructor(props) {
     super(props);
     this.likeArticle = this.likeArticle.bind(this);
     this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  likeArticle = (key) => {

    var val = this.state[key.toString()] + 1;
    var obj  = {};
    obj[key] = val;
    this.setState(obj);
  }




  render() {
      let i = 0;
      return (
        <div>
          <Header title="BBC" />
          {this.props.news.map(article=><NewsArticle u_key={i++} article={article} saveArticle={this.props.saveArticle} likeArticle={this.likeArticle} likes={this.state} />)}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {news: state.bbcNews}
}


export default connect(mapStateToProps, {saveArticle})(BbcNews);
