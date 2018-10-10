import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'
import { fetchSavedArticles } from '../actions/savedArticlesActions.js';
import SavedNewsArticle from '../components/SavedNewsArticle.js'

class SavedArticles extends Component {

  componentDidMount() {
    this.props.fetchSavedArticles()
  }


  render() {
      return (

          <div>
           
          </div>

      );

  }
}

const mapStateToProps = (state) => {
   return {articles: state.savedArticles}
}


export default connect(mapStateToProps, {fetchSavedArticles})(SavedArticles);
