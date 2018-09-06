import React from "react";
import "./PersonSquare.css"

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          Clicked: {props.clicked}
        </li>

      </ul>
    </div>
  </div>
);

export default FriendCard;
