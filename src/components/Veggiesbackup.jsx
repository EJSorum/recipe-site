import { useEffect, useState } from "react";
import Recipe from "./Recipe";

// so i can use this api but need to create a separate fetch to look up 
// each recipe by ID in order to get the complete ingredients and instructions...?
// do the ID call in same async function?
// try redoing this whole thing as a class component...?

function Veggies() {
   const [recipes, setRecipes] = useState([]);

   useEffect(() => {
      getIngredients();
   },[]);
   let ingredients = 'kale'
   const getIngredients = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=e21cf22c36214e388773a43a541abfde&ingredients=${ingredients}&number=9`);
      const data = await api.json();
      //console.log(data)
      setRecipes(data);
   }
  return (
    <div>
      <button onClick={()=>{ingredients='broccoli';getIngredients()}}>Broccoli</button>
      <button onClick={()=>{ingredients='carrots';getIngredients()}}>Carrots</button>
      <button onClick={()=>{ingredients='red pepper';getIngredients()}}>Red Pepper</button>
      <button onClick={()=>{ingredients='green pepper';getIngredients()}}>Green Pepper</button>
      <button onClick={()=>{ingredients='cabbage';getIngredients()}}>Cabbage</button>
      <button onClick={()=>{ingredients='spinach';getIngredients()}}>Spinach</button>

      {recipes.map((recipe) => {
         return(
               <div key={recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}></img>
                  <Recipe recipe={recipe} />
               </div>
         )
      })}
    </div>
  )
}

export default Veggies