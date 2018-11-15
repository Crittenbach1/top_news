import fetch from 'isomorphic-fetch';

export function saveArticle(rec) {
  console.log('C')
  return function(dispatch){
    return fetch(`/api/v1/articles`, {
      credentials: "include",
      method: "POST",
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(rec)
    })
    .then(res => {
      return res.json()
    }).then(article => {
      console.log('D')
       dispatch({type: 'SAVE_ARTICLE', payload: article})
   })
  }
  console.log('E')
}
