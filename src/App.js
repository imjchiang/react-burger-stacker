import React, { Component } from 'react';
import './App.css';
import IngredientList from "./Components/IngredientList";
import BurgerPane from "./Components/BurgerPane";

class App extends Component
{
  state =
  {
    ingredients: this.props.ingredients,
    addedIngredients: []
  }

  addToBurger = (ingredient) =>
  {
    let allIngredients = this.state.addedIngredients.push(ingredient);
  }

  render()
  {
    return (
      <div className="App">
        <div>
          <IngredientList ingredients={this.state.ingredients} onClick={this.addToBurger} />
        </div>
        <div>
          <BurgerPane ingredients={this.state.addedIngredients} />
        </div>
      </div>
    );
  }
}

export default App;
