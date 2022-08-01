import { useEffect, useState } from "react";

function Popular() {
   const [popular, setPopular] = useState ([]);

   useEffect(() => {
      getPopular();
   },[]);
   
   const getPopular = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e21cf22c36214e388773a43a541abfde&number=9`);
      const data = await api.json();
      setPopular(data.recipes);
   }
  return (
    <div>
      {popular.map((recipe) => {
         return(
            <div key={recipe.id}>
               <p>{recipe.title}</p>
            </div>
         )
      })}
    </div>
  )
}

export default Popular