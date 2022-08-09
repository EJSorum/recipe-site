import React, { useState } from 'react';
import Veggies from './components/Veggies';
import style from './style/App.module.css';

function App() {
  const [num, setNum] = useState(4);
  return (
    <div className={style.App}>
      <header>
        <h1>Veggies First</h1>
      </header>
      <h2>Pick a vegetable, and we&apos;ll find recipes!</h2>

      {/*
      The buttons below allow the user to select the numeber of recipes to fetch
      for each search.  This number is passed to the Veggies component as
      props.num
      */}

      <p className={style.select}>
        Select number of recipe suggestions:
        <span> </span>
        {num}
      </p>
      <div className={style.buttonDiv}>
        <button type="button" className={style.numButton} onClick={() => setNum(4)}>
          4
        </button>
        <button type="button" className={style.numButton} onClick={() => setNum(8)}>
          8
        </button>
        <button type="button" className={style.numButton} onClick={() => setNum(12)}>
          12
        </button>
        <button type="button" className={style.numButton} onClick={() => setNum(16)}>
          16
        </button>
        <button type="button" className={style.numButton} onClick={() => setNum(32)}>
          32
        </button>
      </div>
      <Veggies num={num} />
    </div>
  );
}

export default App;
