import styling from '../styling.module.css'
import { useState, useEffect } from 'react'
import { IRecipe } from './Recipes'
import { useParams } from 'react-router-dom';

const SingleRecipe = () => {

    const average = (ratings: Array<Number>) => {
        if (ratings.length === 0) {
            return 0;
        }

        let total = 0;

        ratings.forEach((r) => {
            total += r as number;
        })

        return Math.ceil(total / ratings.length);
    }

    const stars = (ratings: Array<Number>) => {
        const s = [];
        for(let i=0; i < average(ratings); i++) {
            s.push(<i className="fa-solid fa-star"></i>);
        }
        return s
    }

    let { recipeId } = useParams();

    const [recipe, setRecipe] = useState<IRecipe>();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}`)
            .then(data => data.json())
            .then(recipe => setRecipe(recipe))
    }, [recipeId])

    return <article className={styling.singleRecipe}>
        <img src={recipe?.imageUrl} alt={recipe?.title} className={styling.singleRecipeImage} />
        <section className={styling.SingleRecipeSection}>
            <h1 className={styling.sh1}>{recipe?.title}</h1>
            <h3 className={styling.sh3}>{recipe?.description}</h3>
        </section>
        <section className={styling.SingleRecipeSectionRow}> 
            <h3 className={styling.sh3}>{recipe?.ingredients.length} Ingredienser</h3>
            <h3 className={styling.sh3}>{stars(recipe?.ratings || [])} Stjärnor</h3>
        </section>
        <section className={styling.SingleRecipeSectionColumn}>
            <h4 className={styling.sh4}>Ingredienser</h4>
            <h4 className={styling.sh4}>
                <ul>
                    {recipe?.ingredients.map(ingredient =>
                        <li>{ingredient.ingredient}</li>)}
                </ul>
            </h4>
        </section>
        <section className={styling.SingleRecipeSectionColumn}>
            <h4 className={styling.sh4}>Instruktioner</h4>
            <h4 className={styling.sh4}>                
                <ul>
                    {recipe?.instructions.map(instruction =>
                        <li>{instruction}</li>)}
                </ul></h4>
        </section>
    </article>
}

export default SingleRecipe;
