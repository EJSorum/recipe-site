import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import Instructions from './Instructions';
import style from '../style/Veggies.module.css';

/*
TODO:
- Consider refactoring so all three API fetch functions are in the same component.
- Style search bar and "select number of recipes."
- Wrap any long web addresses if they appear in the recipe text.
- Style body or header with images.
*/

function Veggies(props) {
  // recipes is the data for each recipe fetched from the API
  const [recipes, setRecipes] = useState([]);
  // ingredients corresponds to the the word(s) the user searches for.
  const [ingredient, setIngredient] = useState('broccoli');
  const { num } = props;
  /*
   The Veggies component contains most of the app functionality.  The useEffect hook
   controls the getIngredients function, which fetches data from the spoonacular API.
   By passing [ingredient] as the second parameter of useEffect, a new search with
   start when new ingredients are entered.
   */

  const getRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredient}&number=${num}`,
    );
    const data = await api.json();
    setRecipes(data);
  };
  useEffect(() => {
    getRecipes();
  }, [ingredient]);
  /*
   The handler below is commented out since the useEffect automatically fetches new recipes
   when the ingredient changes.
   I have kept it here in case another solution is preferred at some point.
   */
  // const handleSubmit = (e) => {e.preventDefault();getRecipes()}
  return (
    <div className={style.mainColumn}>
      <p className={style.select}>
        Search recipes by pressing a veggie button:
        <span> </span>
        {ingredient}
      </p>
      {/**
         The buttons below serve as easy, one-click searches for a particular vegetable.
          */}
      <div className={style.buttonsGrid}>
        <button
          type="button"
          onClick={() => {
            setIngredient('broccoli');
          }}
        >
          Broccoli
        </button>
        <button
          type="button"
          onClick={() => {
            setIngredient('carrots');
          }}
        >
          Carrots
        </button>
        <button
          type="button"
          onClick={() => {
            setIngredient('red pepper');
          }}
        >
          Red Pepper
        </button>
        <button
          type="button"
          onClick={() => {
            setIngredient('green pepper');
          }}
        >
          Green Pepper
        </button>
        <button
          type="button"
          onClick={() => {
            setIngredient('cabbage');
          }}
        >
          Cabbage
        </button>
        <button
          type="button"
          onClick={() => {
            setIngredient('green beans');
          }}
        >
          Green Beans
        </button>
        <button
          type="button"
          onClick={() => {
            setIngredient('squash');
          }}
        >
          Squash
        </button>
        <button
          type="button"
          onClick={() => {
            setIngredient('cucumber');
          }}
        >
          Cucumber
        </button>
        <button
          type="button"
          onClick={() => {
            setIngredient('zucchini');
          }}
        >
          Zucchini
        </button>
        <button
          type="button"
          onClick={() => {
            setIngredient('tomatoes');
          }}
        >
          Tomatoes
        </button>
        <button
          type="button"
          onClick={() => {
            setIngredient('sweet potatoes');
          }}
        >
          Sweet Potatoes
        </button>
        <button
          type="button"
          onClick={() => {
            setIngredient('cauliflower');
          }}
        >
          Cauliflower
        </button>
      </div>

      {/*
         The form below serves as a search bar where the user can search for recipes
         using any ingredient.
          */}
      <p className={style.select}>-Or-</p>
      <form>
        <label htmlFor="custom">Search any ingredient: </label>
        <input name="custom" id="custom" onChange={(e) => setIngredient(e.target.value)} />
      </form>

      <div className={style.recipesGrid}>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <p className={style.title}>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
            <div>
              <p className={style.section}>Ingredients:</p>
              <Recipe recipeID={recipe} />
              <p className={style.section}>Instructions:</p>
              <Instructions recipeID={recipe} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
Veggies.defaultProps = {
  num: 4,
};
Veggies.propTypes = {
  num: PropTypes.number,
};
export default Veggies;
