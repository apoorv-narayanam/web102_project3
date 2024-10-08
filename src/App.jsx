import { useState } from 'react'
import './App.css'
import CardList from './CardList'
import Textbox from './Textbox'

function App() {
  const quizlist = [{"Which data structure follows FIFO principle in insertion and deletion?":"Queue"},
    {"Which data structure follows LIFO principle in insertion and deletion?":"Stack"}
    ,{"Which traversal of BST gives sorted order of the elements in the tree?":"Inorder"}
    ,{"Which is the data structure used for O(1) operation for both insert and search operations?":"Hash Table"}
    ,{"Which is the data structure used for O(logn) operation for both insert and search operations?":"Heap"}]
    const [front,setfront]=useState("Start!");
    const [back,setback]=useState("Please click on the next button to start the quiz....");
    const [text,setText]=useState("");
    var answer = back;
    const [clicked,setClicked] = useState(false);
    const [index,setIndex] = useState(0);
    const [newClass,setNewClass]=useState('blank');
    function handleFlip(){
  setClicked(!clicked)
}
    const handleClick = () =>{
      console.log(index);
      setfront(Object.keys(quizlist[index])[0]);
      const temp=Object.keys(quizlist[index])[0];
      setback(quizlist[index][temp]);
      answer=back;
      setClicked(false);
      var nextIndex=((index+1)%(quizlist.length));
      setIndex(nextIndex);
      setText("");
      setNewClass('blank');
  }
  const handlePrev = () => {
    setClicked(false);
    var prevIndex=((index-1+quizlist.length)%(quizlist.length));
    console.log(index);
    setIndex(prevIndex);
    setfront(Object.keys(quizlist[index])[0]);
    const temp=Object.keys(quizlist[index])[0];
    setback(quizlist[index][temp]);
    answer=back;
    setText("");
    setNewClass('blank');
  }
  function handleChange(e) {
    setText(e.target.value);
  }
    return (
    <div className="parent">
      <h1> DSA QUIZ! </h1>
      <h3> Do you really think you are the best DSA geek out there? If yes, test your knowledge here! </h3>
      <CardList className="cardlist" quizlist={quizlist} frontText={front} backText={back} clicked={clicked} handleClick={handleClick} handleFlip={handleFlip} handlePrev={handlePrev}></CardList>
      <Textbox className="tbox" newClass={newClass} setNewClass={setNewClass} clicked={clicked} text={text} answer={answer} handleChange={handleChange}></Textbox>
    </div>
  )
}

export default App;
