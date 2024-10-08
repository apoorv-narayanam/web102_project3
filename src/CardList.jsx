import React, { useState } from 'react';
import './Card.css'
import Card from './Card'
function CardList(props) {

const quizlist = props.quizlist;


    return (
<div className="cardList">
<p>Number of cards: {quizlist.length}</p>
<Card frontText={props.frontText} backText={props.backText} clicked={props.clicked} handleFlip2={props.handleFlip}></Card>
<br></br>
<button onClick={props.handlePrev}>PREV</button><button onClick={props.handleClick}>NEXT</button>
</div>
    )
  }
  
  export default CardList;