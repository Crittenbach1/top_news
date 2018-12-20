import fetch from 'isomorphic-fetch';

export function likeArticle(article) {

  return function(dispatch){
    return fetch(`/api/v1/articles/${article["id"]}`, {
      credentials: "include",
      method: "PUT",
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(article)
    })
    .then(res => {
      return res.json()
    }).then(article => {
       dispatch({type: 'LIKE_ARTICLE', payload: article})
   })
  }
}
