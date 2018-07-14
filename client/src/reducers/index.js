import { combineReducers } from 'redux';
import bbcNews from './bbcNewsReducer.js';
import foxNews from './foxNewsReducer.js';


export default combineReducers({
  bbcNews,
  foxNews,
  cnnNews,
});
