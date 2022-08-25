import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from '../style/Instructions.module.css';

/*
This component fetches the instructions section of the recipe from spoonacular.com.
The documentation for this API function may be found here:
https://spoonacular.com/food-api/docs#Get-Analyzed-Recipe-Instructions
After the fetching the API, getInstructions asigns it to a JSON file, "data."
Then the "steps" array is extracted from the JSON and assigned to "instructions"
using useState.
Each instruction has a "number" and "step" key, which is extracted from each object in
the array and rendered to the component.
*/

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
