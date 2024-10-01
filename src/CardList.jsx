import React, { useState } from 'react';
import './Card.css'
import Card from './Card'
function CardList(props) {
const [front,setfront]=useState("Start!");
const [back,setback]=useState("Please click on the next button to start the quiz....");
const quizlist = props.quizlist;
const handleClick = () =>{
    const index=Math.floor(Math.random() * (5- 0) ) + 0;
    console.log(index)
    setfront(Object.keys(quizlist[index])[0]);
    const temp=Object.keys(quizlist[index])[0];
    setback(quizlist[index][temp]);
    setClicked(false);
}
const [clicked,setClicked] = useState(false);
const handleFlip = () => {
  setClicked(!clicked)
}
    return (
<div className="cardList">
<p>Number of cards: {quizlist.length}</p>
<Card frontText={front} backText={back} clicked={clicked} handleFlip={handleFlip}></Card>
<br></br>
<button>PREV</button><button onClick={handleClick}>NEXT</button>
</div>
    )
  }
  
  export default CardList;