import React from 'react';
var $ = require ('jquery');

class NewsArticle extends React.Component {



      handleClick(event) {
        var title = this.props.article.title;
        var author = this.props.article.author;
        var description = this.props.article.description;
        var url = this.props.article.url;

        
      }



       render() {

        return (
          <div className="article">
            <img alt = "" src={this.props.article.urlToImage}/>
             <h3><a href={this.props.article.url}>{this.props.article.title}</a></h3>
             <p>{this.props.article.description}</p>
             <br/>
             <input type="submit" onClick={this.handleClick.bind(this)} value="Save Article"/>
          </div>
        );
       }
     }

export default NewsArticle;
