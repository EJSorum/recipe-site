import { useEffect, useState } from "react";

function Veggies() {
   const [recipes, setRecipes] = useState ([]);
   const [ingredients, setIngredients] = useState ();

   useEffect(() => {
      getIngredients();
   },[]);
   const getIngredients = () => async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredients}&number=9`);
      const data = await api.json();
      console.log(data)
      setRecipes(data);
   }
   const changeIngredient = (ingredient) => {
      setIngredients(ingredient);
      getIngredients();
   }
   
  return (
    <div>
      <button onClick={() => {setIngredients('broccoli')}}>Broccoli</button>
      <button onClick={() => changeIngredient('carrots')}>Carrots</button>

      {recipes.map((recipe) => {
         return(
               <div key={recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}></img>
                  <p>{recipe.instructions}</p>
               </div>
         )
      })}
    </div>
  )
}

export default Veggies