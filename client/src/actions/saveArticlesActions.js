import fetch from 'isomorphic-fetch';

export function saveArticle(rec) {
  return function(dispatch){
    return fetch(`/api/v1/articles`, {
      credentials: "include",
      method: "POST",
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(rec.props.article)
    })
    .then(res => {
      return res.json()
    }).then(article => {
      // dispatch({type: 'SAVE_ARTICLE', payload: article})
   })
  }
}
