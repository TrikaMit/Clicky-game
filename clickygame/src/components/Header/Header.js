import React, { Component } from 'react';
class Header extends Component {
    render() {
      return (
  <div className="jumbotron jumbotron-fluid">
      <div className="container">
          <h1 className="display-3">Clicky Game!</h1>
          <p className="lead">You guessed ""</p>
          <p className="lead">Score: Top Score:</p>
      </div>
  </div>
      );
    }
  }
  export default Header;