import React, { Component } from "react";
import "./PersonSquare.css"

class PersonSquare extends Component {
constructor(props){
  super(props);
  this.state = {
  props:this.props,
  clicked: false
};
}

wasClicked = e => {
  console.log(e);
  if(this.state.clicked === false) {
    this.setState({clicked: true})
    this.props.addScore();
    this.props.getClicked(e.name);
  } else {
    alert("you lose!");
    window.location.reload();
  }
}

render(props) {
return (
<div className="card" onClick={
  () => this.wasClicked(this.props)}>
  <div className="img-container">
    <img alt={this.props.name} src={this.props.image} />
  </div>
  <div className="content">
    <ul>
      <li>
        <strong>Name:</strong> {this.props.name}
      </li>
    </ul>
  </div>
</div>
)
}
}

export default PersonSquare;