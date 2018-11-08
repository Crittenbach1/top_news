import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'
import SavedNewsArticle from '../components/SavedNewsArticle.js'

import '../App.css';

class SavedArticles extends Component {


  render() {
      return (

          <div>
           <Header title="Saved News Articles" />
            {this.props.articles.map(article=><SavedNewsArticle key={article.id} article={article} />)}
          </div>

      );

  }
}

const mapStateToProps = (state) => {
   return {articles: state.savedArticles}
}


export default connect(mapStateToProps)(SavedArticles);
