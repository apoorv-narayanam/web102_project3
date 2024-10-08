import React, { useState } from 'react';
import './Card.css'
function Textbox(props){
    
    const handleClick = () =>{
        if(props.clicked===false && props.text===props.answer) props.setNewClass('green');
        else if(props.text!=props.answer) props.setNewClass('red');
        else props.setNewClass('blank');
    }
    return (                                                           
        <div>
            <label>Guess your answer here! <input value={props.text} className={`box ${props.newClass==="blank"?"blank":props.newClass==="red"?"red":"green"}`} onChange={props.handleChange}></input>
            </label>
            <button onClick={handleClick}> SUBMIT GUESS </button>
        </div>
    )
}
export default Textbox;