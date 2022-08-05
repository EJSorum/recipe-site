import {useState} from 'react'
import Veggies from "./components/Veggies";
import style from './style/App.module.css'
import header from './components/images/header.jpg'

function App() {
  const [num, setNum] = useState(2);
  return (
    <div className={style.App}>
      <header><h1>Veggies First</h1></header>
      <h2>Pick a vegetable, and we'll find recipes!</h2>
      <span>Select number of recipe suggestions: {num}</span>
      <div className={style.buttonDiv}>
        <button className={style.numButton} onClick={() => setNum(4)}>4</button>
        <button className={style.numButton} onClick={() => setNum(8)}>8</button>
        <button className={style.numButton} onClick={() => setNum(12)}>12</button>
        <button className={style.numButton} onClick={() => setNum(16)}>16</button>
      </div>
      <Veggies num={num}/>
    </div>
  );
}

export default App;
