import React from 'react';
import '../../App.css';
import Quiz from'../Quiz/Quiz.js';
import Start from '../Start';
import Header from '../Header';

function App( {start} ) {
  return (
    <>
      <Header />
      { start ? <Quiz /> : <Start /> }
      <complete/>
    </>
  );
}

export default App;
