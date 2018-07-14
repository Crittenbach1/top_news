import fetch from 'isomorphic-fetch';

export function fetchBbcNews() {

  return function(dispatch){
    dispatch({type: 'LOADING'})
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=fox-news&' +
          'apiKey=70bcf549d841400da8555aa7ce6a69c3';
    var req = new Request(url);
    return fetch(req)
    .then(function(response) {
      return response.json()
    })
     .then(function(news) {
        dispatch({type: 'FETCH_FOX_NEWS', payload: news.articles})
    })
  }
}
