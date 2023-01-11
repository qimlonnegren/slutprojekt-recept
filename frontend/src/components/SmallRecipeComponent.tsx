import styling from '../styling.module.css'
import { Link } from "react-router-dom"
import { IRecipe } from './Recipes'



interface props {
    recipe: IRecipe
}

const SmallRecipeComponent = ({ recipe }: props) => {
    const average = (ratings: Array<any>) => {
        if (ratings.length === 0) {
            return 0;
        }

        let total = 0;

        ratings.forEach((r) => {
            total += r;
        })

        return Math.ceil(total / ratings.length);
    }

    const stars = (ratings: Array<any>) => {
        const s = [];
        for(let i=0; i < average(recipe.ratings); i++) {
            s.push(<i className="fa-solid fa-star"></i>);
        }
        return s
    }


    return <article className={styling.recipeArticle}>
         <img src={recipe?.imageUrl} alt={recipe?.title} className={styling.singleRecipeImage} />
        <div className={styling.recipeDiv}>
            <h1 className={styling.h1}><Link to={"/recipe/" + recipe._id}>{recipe.title}</Link></h1>
            <h2 className={styling.h2}>{stars(recipe.ratings)}</h2>
        </div>

        <div className={styling.recipeDiv}>
            <h3 className={styling.h3}>{recipe.description}</h3>
        </div>

        <div className={styling.recipeDiv}>
            <p className={styling.p}>{recipe.ingredients.length} ingredienser</p>
            <p className={styling.p}>{recipe.timeInMins.toString()} minuter</p>
        </div>
    </article>
};

export default SmallRecipeComponent;

