import { useEffect, useState } from "react";

function Recipe(props) {
   const [recipe, setRecipe] = useState(props.recipe)
   useEffect(() => {
      getRecipe();
   },[]);
   const getRecipe = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`);
      const data = await api.json();
      // I get an array of ingredients for each recipe
      // I need a 
      console.log(data.ingredients)
      setRecipe(data.ingredients);
   }


  return (
      <ul>
      {recipe.map((ingredient) => {
         return(
               <li>
                  <p>{ingredient.amount.us.value} {ingredient.amount.us.unit} {ingredient.name}</p>

               </li>
         )
      })}
      </ul>
  )
   
}

export default Recipe