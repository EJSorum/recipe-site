import { useEffect, useState } from "react";
import style from '../style/Recipe.module.css'

function Recipe(props) {
   const [recipe, setRecipe] = useState([])
   useEffect(() => {
      getRecipe();
   },[]);
   const getRecipe = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/${props.recipe.id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`);
      const data = await api.json();
      setRecipe(data.ingredients);
   }


  return (
      <ul className={style.ingredients}>
      {recipe.map((ingredient) => {
         return(
               <li className={style.bullet}>
                  <p>{ingredient.amount.us.value} {ingredient.amount.us.unit} {ingredient.name}</p>
               </li>
         )
      })}
      </ul>
  )
}

export default Recipe