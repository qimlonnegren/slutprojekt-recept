import { useState, useEffect } from 'react';
// import ObjectId from 'mongoose'
import SmallRecipeComponent from './SmallRecipeComponent'


export interface ingredientType {
    ingredient: String;
    amount: Number;
    unit: String;
}

export interface commentType {
    comment: String;
    name: String;
    createdAt: Date;
}

export interface IRecipe {
        // id: String;
        title: String;
        description: String;
        imageUrl: String;
        timeInMins: Number;
        ratings: Array<Number>;
        category: Array<String>;
        ingredients: Array<ingredientType>;
        instructions: Array<String>;
        comments: Array<commentType>;
    }

const Recipes = () => {
    const [Recipes, setRecipes] = useState<Array<IRecipe> | undefined>();
    useEffect(() => {
        fetch("http://localhost:4000/recipes")
            .then(data => data.json())
            .then(Recipes => setRecipes(Recipes))
            
    }, [])
    return <>{Recipes?.map(recipe => <SmallRecipeComponent recipe={recipe}/>)}</>
}

export default Recipes;
