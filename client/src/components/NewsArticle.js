import React from 'react';

import { saveArticle } from '../actions/saveArticlesActions.js'


class NewsArticle extends React.Component {


      render() {

        return (
          <div className="article">
            <img className="article-images" alt = "" src={this.props.article.urlToImage}/>
             <h3><a href={this.props.article.url}>{this.props.article.title}</a></h3>
             <p>{this.props.article.description}</p>
             <br/>
             <input type="submit" onClick={saveArticle(this)} value="Save Article"/>
          </div>
        );
       }
     }

export default NewsArticle;
