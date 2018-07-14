import React from 'react';


const NewsArticle = ( { key, article } ) =>
    <div key>
       <h3><a href={article.url}>{article.title}</a></h3>
       <p>{article.author}</p>
       <p>{article.description}</p>
       <img src={article.urlToImage}/>
    </div>

export default NewsArticle;
