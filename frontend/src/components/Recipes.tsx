import { useState, useEffect } from 'react';
import SmallRecipeComponent from './SmallRecipeComponent'
import { useParams } from 'react-router-dom';

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
        _id: String;
        title: string;
        description: String;
        imageUrl: string;
        timeInMins: Number;
        ratings: Array<Number>;
        category: Array<String>;
        ingredients: Array<ingredientType>;
        instructions: Array<String>;
        comments: Array<commentType>;
}

const Recipes = () => {
    let { category } = useParams();
    const [Recipes, setRecipes] = useState<Array<IRecipe> | undefined>();
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (category) {
            fetch(`${process.env.REACT_APP_API_BASE_URL}/categories/${category}/recipes?search=${search}`)
                .then(data => data.json())
                .then(Recipes => setRecipes(Recipes))
        } else {
            fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes?search=${search}`)
                .then(data => data.json())
                .then(Recipes => setRecipes(Recipes))
        }
            
    },  [search, category])

    return <>
        <input type="text" placeholder={ category || "sök"} value={ search } onChange={(e) => setSearch(e.target.value)}/>
        {Recipes?.map(recipe => <SmallRecipeComponent key={recipe._id.toString()} recipe={recipe}/>)}
        </>
}

export default Recipes;


