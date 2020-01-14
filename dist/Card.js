import React from 'react';
import './card.css';

const Card = props => {
  return React.createElement("div", {
    className: "card"
  }, React.createElement("div", null, "React Pacakge"), " ", React.createElement("br", null), React.createElement("span", null, "Hello :"), " ", props.children);
};

export default Card;