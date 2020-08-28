import React from "react";

export default function BurgerPane(props)
{
    return(
        <>
            <ul>{props.ingredients}</ul>
            <h3>Burger Stacking Area</h3>
        </>
    )
}