import React from 'react';
var $ = require ('jquery');

class NewsArticle extends React.Component {

      render() {

        return (
          <div className="article">
            <img alt = "" src={this.props.article.urlToImage}/>
             <h3><a href={this.props.article.url}>{this.props.article.title}</a></h3>
             <p>{this.props.article.description}</p>
          </div>
        );
       }
     }

export default NewsArticle;
