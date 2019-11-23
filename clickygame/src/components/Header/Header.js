import React, { Component } from 'react';
class Header extends Component {
    render() {
      return (
  <div className="jumbotron jumbotron-fluid">
      <div className="container">
          <h1 className="display-3">Clicky Game!</h1>
          <p className="lead">Click on any character to begin the game, and start gaining points. Don't click the same character twice, or you LOSE!</p>
          <p className="lead">You guessed {this.props.name}</p>
          <p className="lead">Score: {this.props.score} </p>
      </div>
  </div>
      );
    }
  }
  export default Header;