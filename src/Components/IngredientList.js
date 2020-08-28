import React from "react";
import "./../App.css"

export default function IngredientList(props)
{
    const allIngredients = props.ingredients.map((ingredient, ind) =>
    {
        return(
            <form className="ingredient-form">
                <label className="ingredient-label" style={{backgroundColor:ingredient.color}}>{ingredient.name} </label>
                <button onClick={props.onClick(ingredient)}>➡</button>
            </form>
        ) 
    })

    return(
        <>
            <h3>Ingredients</h3>
            <div>
                {allIngredients}
            </div>
        </>
    )
}