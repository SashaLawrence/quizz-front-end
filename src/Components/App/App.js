import React from 'react';
import '../../App.css';
import Quiz from'../Quiz/Quiz.js';
import Start from '../Start';
import Header from '../Header';
import Complete from "../Complete/Complete";

function App( {start, qcounter} ) {
  return (
    <>
      <Header />
      { start ? <Quiz /> : <Start /> }
      { qcounter === 20 ? <Complete/> : null }
    </>
  );
}

export default App;
