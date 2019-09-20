import React from 'react';
import '../../App.css';
import Quiz from'../Quiz';
import Start from '../Start';
import Header from '../Header';


function App( {start} ) {
  return (
    <>
      { start ? <Quiz /> : <Start /> }
      {/* { qcounter > 20 ? <Complete/> : <Quiz /> } } */}
    </>
  );
}

export default App;
