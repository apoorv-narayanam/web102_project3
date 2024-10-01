import { useState } from 'react'
import './App.css'
import CardList from './CardList'

function App() {
  const quizlist = [{"Which data structure follows FIFO principle in insertion and deletion?":"Queue"},
    {"Which data structure follows LIFO principle in insertion and deletion?":"Stack"}
    ,{"Which traversal of BST gives sorted order of the elements in the tree?":"Inorder"}
    ,{"Which is the data structure used for O(1) operation for both insert and search operations?":"Hash Table"}
    ,{"Which is the data structure used for O(logn) operation for both insert and search operations?":"Heap"}]
  return (
    <div className="parent">
      <h1> DSA QUIZ! </h1>
      <h3> Do you really think you are the best DSA geek out there? If yes, test your knowledge here! </h3>
      <CardList className="cardlist" quizlist={quizlist}></CardList>
    </div>
  )
}

export default App;
