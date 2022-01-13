import './index.css'
import React, { useEffect, useState } from 'react';
import RecipeTitle from './RecipeTitle'
import IngredientList from './IngredientList'

function App() {
    const initialRecipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ]
    };

    const [recipe, setRecipe] = useState(initialRecipe);


    // TODO: Add new state property

    function ingredientClick(index)
    {
        const updateRecipe = { ...recipe };
        updateRecipe.ingredients[index].prepared = !updateRecipe.ingredients[index].prepared;
        setRecipe(updateRecipe);
    }

    // TODO: Add the effect hook

    return (
        <article>
            <h1>Recipe Manager</h1>

            <RecipeTitle title={recipe.title} feedback={recipe.feedback}></RecipeTitle>

            <IngredientList ingredients={recipe.ingredients} onClick={ ingredientClick }></IngredientList>

            {/* TODO: Add the prep work display */}
        </article>
    )
}

export default App;
