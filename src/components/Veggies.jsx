import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Instructions from "./Instructions";
import style from '../style/Veggies.module.css'

function Veggies(props) {
   const [recipes, setRecipes] = useState([]);
   const [ingredients, setIngredients] = useState('broccoli');

   useEffect(() => {
      getIngredients();
   },[ingredients]);
   const getIngredients = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredients}&number=${props.num}`);
      const data = await api.json();
      setRecipes(data);
   }
   const handleSubmit = (e) => {e.preventDefault();getIngredients()}
   return (
      <div className={style.mainColumn}>
         <p>Select a veggie: {ingredients}</p>
         <div className={style.buttonsGrid}>
            <button onClick={()=>{setIngredients('broccoli');}}>Broccoli</button>
            <button onClick={()=>{setIngredients('carrots');}}>Carrots</button>
            <button onClick={()=>{setIngredients('red pepper');}}>Red Pepper</button>
            <button onClick={()=>{setIngredients('green pepper');}}>Green Pepper</button>
            <button onClick={()=>{setIngredients('cabbage');}}>Cabbage</button>
            <button onClick={()=>{setIngredients('green beans');}}>Green Beans</button>
            <button onClick={()=>{setIngredients('squash');}}>Squash</button>
            <button onClick={()=>{setIngredients('cucumber');}}>Cucumber</button>
            <button onClick={()=>{setIngredients('zucchini');}}>Zucchini</button>
            <button onClick={()=>{setIngredients('tomatoes');}}>Tomatoes</button>
            <button onClick={()=>{setIngredients('sweet potatoes');}}>Sweet Potatoes</button>
            <button onClick={()=>{setIngredients('cauliflower');}}>Cauliflower</button>
         </div>
         
         <form onSubmit={handleSubmit}>
            <label htmlFor="custom">Search any ingredient: </label>
            <input name="custom" id="custom" onChange={(e) => setIngredients(e.target.value)}></input>
         </form>
         
         <div className={style.recipesGrid}>
            {recipes.map((recipe) => {
               return(
                  <div key={recipe.id}>
                     <p className={style.title}>{recipe.title}</p>
                     <img src={recipe.image} alt={recipe.title}></img>
                     <div>
                        <p>Ingredients:</p>
                        <Recipe recipe={recipe} />
                        <p>Instructions:</p>
                        <Instructions recipe={recipe} />
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Veggies