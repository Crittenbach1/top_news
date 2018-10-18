import fetch from 'isomorphic-fetch';

export function saveArticle() {
    debugger
  return function(dispatch){
    dispatch({type: 'LOADING'})
    var url = 'http://localhost:3001/api/v1/articles.json';
    var req = new Request(url);
    return fetch(req)
    .then(function(response) {
      return response.json()
    })
     .then(function(articles) {
        dispatch({type: 'FETCH_SAVED_ARTICLES', payload: articles.articles})
    })
  }
}
