import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class BbcNews extends Component {

  componentDidMount() {
  
  }


  render() {


      return (
        <div>
          hi
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {news: state.news}
}


export default connect(mapStateToProps, {})(BbcNews);
