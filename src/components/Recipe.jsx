import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from '../style/Recipe.module.css';

function Recipe(props) {
  const [recipe, setRecipe] = useState([]);
  const { recipeID } = props;
  const getRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${recipeID.id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`,
    );
    const data = await api.json();
    setRecipe(data.ingredients);
  };
  useEffect(() => {
    getRecipe();
  }, []);
  return (
    <ul className={style.ingredients}>
      {recipe.map((ingredient) => (
        <li className={style.bullet}>
          <p>
            {ingredient.amount.us.value}
            {' '}
            {ingredient.amount.us.unit}
            {' '}
            {ingredient.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
Recipe.defaultProps = {
  recipeID: 'broccoli',
};
Recipe.propTypes = {
  recipeID: PropTypes.string,
};
export default Recipe;
