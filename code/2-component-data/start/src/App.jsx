import './index.css'
import React from 'react';
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList';
import StepList from './StepList';


function App() {
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            {name: '3 potatoes, cut into 1/2 pieces', prepared: false},
            {name: '4 tbsp butter', prepared:false},
            {name: '1/8 cup heavy cream', prepared:false},
            {name: 'Salt', prepared: true},
            {name: 'Pepper', prepared:true}
        ], 
        steps: [
            { order: 1, description: 'Add cut potatoes to a pot of heavily salted water.'},
            { order: 2, description: 'Bring pot to a boil.'},
            { order: 3, description: 'Boil the potatoes until fork tender, about 15-20 minutes.'},
            { order: 4, description: 'Strain the potatoes.'},
            { order: 5, description: 'Return potatoes to pot.'},
            { order: 6, description: 'Add butter, cream, salt, and pepper to taste.'},
            { order: 7, description: 'Mash potatoes.'},
            { order: 8, description: 'Reseason and add butter and cream as desired.'}
        ]
    };

    return (
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback }></RecipeTitle>  

            <IngredientList ingredients={recipe.ingredients}></IngredientList>

            <StepList steps={ recipe.steps }></StepList>

        </article>
    )
}

export default App;
