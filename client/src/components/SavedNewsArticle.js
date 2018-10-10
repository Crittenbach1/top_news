import React from 'react';


const SavedNewsArticle = ( { article } ) =>

      <div>
         <h3><a href={article.url}>{article.title}</a></h3>
         <p>{article.author}</p>
         <p>{article.description}</p>
      </div>


export default SavedNewsArticle;
