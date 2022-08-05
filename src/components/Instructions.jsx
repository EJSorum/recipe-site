import { useEffect, useState } from "react";
import style from '../style/Instructions.module.css'

function Instructions(props) {
   const [instructions, setInstructions] = useState([])
   useEffect(() => {
      getInstructions();
   },[]);
   const getInstructions = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/${props.recipe.id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`);
      const data = await api.json();
      setInstructions(data[0].steps);
   }

  return (
      <ul>
      {instructions.map((instruction) => {
         return(
               <li key={instruction.number} className={style.bullet}>
                  <p>{instruction.number}. {instruction.step}</p>
               </li>
         )
      })}
      </ul>
  )
   
}

export default Instructions