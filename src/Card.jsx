import React, { useState } from 'react';
import './Card.css'
function Card(props) {
    return (
<div className={`card ${props.clicked?"flip":""}`} onClick={props.handleFlip2}>
    <div className="front">
      {props.frontText}
    </div>
    <div className="back">
    {props.backText}
    </div>
  </div>
    )
  }
  
  export default Card;