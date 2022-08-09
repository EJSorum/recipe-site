import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from '../style/Instructions.module.css';

function Instructions(props) {
  const [instructions, setInstructions] = useState([]);
  const { recipeID } = props;
  const getInstructions = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${recipeID.id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`,
    );
    const data = await api.json();
    setInstructions(data[0].steps);
  };
  useEffect(() => {
    getInstructions();
  }, []);
  return (
    <ul>
      {instructions.map((instruction) => (
        <li key={instruction.number} className={style.bullet}>
          <p>
            {instruction.number}
            .
            {instruction.step}
          </p>
        </li>
      ))}
    </ul>
  );
}
Instructions.defaultProps = {
  recipeID: 'broccoli',
};
Instructions.propTypes = {
  recipeID: PropTypes.string,
};
export default Instructions;
