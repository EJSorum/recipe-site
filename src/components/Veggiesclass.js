import React, { Component } from 'react'

export class Veggies extends Component {
constructor(props) {
  super(props)

  this.state = {
     recipes: [],
     ingredient: [],
  }
// I would need componentDidMount etc
   const getIngredients = () => async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${this.state.ingredient}&number=9`);
      const data = await api.json();
      console.log(data)
      this.state.recipes=(data);
   }
   const setIngredient = (ingredient) => {
      this.state.ingredient = ingredient;
      this.getIngredients()
   }
}
   render() {

  return (
    <div>
      <button onClick={() => this.setIngredient('broccoli')}>Broccoli</button>
      <button onClick={() => this.setIngredient('carrots')}>Carrots</button>

      {this.state.recipes.map((recipe) => {
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
}

export default Veggies