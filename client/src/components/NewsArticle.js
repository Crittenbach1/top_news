import React from 'react';
import { saveArticle } from '../actions/saveArticleActions.js';

class NewsArticle extends React.Component {


      debugger

      //  var title = this.props.article.title;
      //  var author = this.props.article.author;
      //  var description = this.props.article.description;
      //  var url = this.props.article.url;
      //this.props.saveArticle(this.props.article)
        // move fetch to an action and call it here
      //  $.ajax({
      //      url: "http://localhost:3001/api/v1/articles",
      //      type: "POST",
      //      data: { article: { title: title, author: author, description: description, url: url } },
      //      success: response => {
      //        console.log("it worked!", response);
      //      }
      //  });



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
