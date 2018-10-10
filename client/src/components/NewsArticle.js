import React from 'react';
var $ = require ('jquery');

class NewsArticle extends React.Component {



      handleClick(event) { 
          alert("hello");
      }



       render() {

        return (
          <div className="article">
            <img alt = "" src={this.props.article.urlToImage}/>
             <h3><a href={this.props.article.url}>{this.props.article.title}</a></h3>
             <p>{this.props.article.description}</p>
             <input type="submit" onClick={this.handleClick.bind(this)} value="Save Article"/>
          </div>
        );
       }
     }

export default NewsArticle;
